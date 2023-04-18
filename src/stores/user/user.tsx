import { cast, flow, types } from "mobx-state-tree";
import { userApi } from "../../api";
import { notification } from "../../utils/notifications";
import { constRoute } from "@utils/route";
import { catchError, onLogOutClearAll } from "@utils/common-functions";
import { LOWER_THEME, LOWER_TOKEN } from "@utils/const";
import {
  userInfoModel,
} from "@stores/store-utils";
import { toJS } from "mobx";

export const user = types

  .model({
    userInfo: types.maybeNull(userInfoModel),
    loading: types.optional(types.boolean, false),    
    loadingLogin: types.optional(types.boolean, false),    
  })
  .views((self) => ({
    get getUserInfo() {
      return toJS(self.userInfo);
    },
    get isLoadingLogin() {
      return toJS(self.loadingLogin);
    },

  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      try {
        const res = yield userApi.onUserLogin(data);
        console.log("onUserLogin res", res)
        if (res?.success) {
          localStorage.setItem(LOWER_TOKEN, res?.token);
          localStorage.setItem(LOWER_THEME, res?.defaultTheme);
          notification.success(res?.message);
          let resLoadUser = yield loadUserInfo();
          if (resLoadUser.success) {
            navigate(`${constRoute.dashboard}`);
          }
        }
      } catch (error) {
        catchError(error, "onUserLogin");
      } finally {
        self.loadingLogin = false;
      }
    });

    const onSignUpUser = flow(function* (data) {
      self.loading = true;
      let response = null;
      try {
        const res = yield userApi.onSignUpUser(data);
        response = res;
        if (res?.success) {
          notification.success("Signed up successfully");
        }
      } catch (error) {
        catchError(error, "onSignUpUser");
      } finally {
        self.loading = false;
        return response;
      }
    });


    const loadUserInfo = flow(function* (navigate = null) {
      self.loading = true;
      let response = null;
      try {
        self.loading = true;
        const res = yield userApi.getCurrentUserDetails();
        response = res;
        self.userInfo = res?.results;
      } catch (error) {
        catchError(error, "loadUserInfo");
        response = error.response;
        if (response?.status === 404) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loading = false;
        return response;
      }
    });

    return {
      onUserLogin,
      onSignUpUser,
      loadUserInfo,
     
    };
  });

export function initUser() {
  return user.create({});
}
