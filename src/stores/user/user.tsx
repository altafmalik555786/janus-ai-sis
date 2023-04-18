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
    loadingSignup: types.optional(types.boolean, false),    
    loadingResendEmail: types.optional(types.boolean, false),    
    loadingResetPassword: types.optional(types.boolean, false),    
  })
  .views((self) => ({
    get getUserInfo() {
      return toJS(self.userInfo);
    },
    get isLoadingLogin() {
      return toJS(self.loadingLogin);
    },
    get isLoadingSignup() {
      return toJS(self.loadingSignup);
    },
    get isLoadingResendEmail() {
      return toJS(self.loadingResendEmail);
    },
    get isLoadingResetPassword() {
      return toJS(self.loadingResetPassword);
    },
  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      try {
        const res = yield userApi.onUserLogin(data);
          localStorage.setItem(LOWER_TOKEN, res?.jwt_token);
          localStorage.setItem(LOWER_THEME, res?.defaultTheme);
          res?.jwt_token && notification.success("Signed in successfully");
          navigate(`${constRoute.dashboard}`);
      } catch (error) {
        catchError(error, "onUserLogin");
      } finally {
        self.loadingLogin = false;
      }
    });

    const onSignUpUser = flow(function* (data) {
      self.loadingSignup = true;
      let response = null;
      try {
        const res = yield userApi.onSignUpUser(data);
        response = res;
        notification.success("Signed up successfully");
      } catch (error) {
        catchError(error, "onSignUpUser");
      } finally {
        self.loadingSignup = false;
        return response;
      }
    });

    const onSendResendEmail = flow(function* (data) {
      self.loadingResendEmail = true;
      let response = null;
      try {
        const res = yield userApi.sendResendEmail(data);
        response = res;
      } catch (error) {
        catchError(error, "onSendResendEmail");
      } finally {
        self.loadingResendEmail = false;
        return response;
      }
    });

    const onResetPassword = flow(function* (data) {
      self.loadingResetPassword = true;
      let response = null;
      try {
        const res = yield userApi.resetPassword(data);
        response = res;
      } catch (error) {
        catchError(error, "onResetPassword");
      } finally {
        self.loadingResetPassword = false;
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
      onSendResendEmail,
      onResetPassword
     
    };
  });

export function initUser() {
  return user.create({});
}
