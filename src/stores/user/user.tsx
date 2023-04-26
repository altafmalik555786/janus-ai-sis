import { cast, flow, types } from "mobx-state-tree";
import { userApi } from "../../api";
import { notification } from "../../utils/notifications";
import { constRoute } from "@utils/route";
import { catchError, onLogOutClearAll } from "@utils/common-functions";
import {
  
  currentUserModel,
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
    loadingEmailVerification: types.optional(types.boolean, false),   
    verificationCode: types.maybeNull(types.string),
    loadingProjectSave: types.optional(types.boolean, false),
    projectNameData: types.maybeNull(types.string),
    loadingCurrentUser: types.optional(types.boolean, false), 
    currentUserData: types.maybeNull(currentUserModel),
    loadingConceptNote: types.optional(types.boolean, false), 
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
    get isLoadingEmailVerification() {
      return toJS(self.loadingEmailVerification);
    },
    get isLoadingProjectSave() {
      return toJS(self.loadingProjectSave);
    }, 
    get getProjectNameData() {
      return toJS(self.projectNameData);
    }, 
    get getCurrentUserData(){
      return toJS(self.currentUserData)
    },
    get getLoadingConceptNote(){
      return toJS(self.loadingConceptNote);
    }
  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      try {
        const res = yield userApi.onUserLogin(data);
          localStorage.setItem("token", res?.jwt_token);
          if(res?.jwt_token){
           loadUserInfo().then(() => {
            notification.success("Signed in successfully");
            navigate(`${constRoute.home}`);
          });
         
      }
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
        notification.success("Email resended successfully");
      } catch (error) {
        catchError(error, "onSendResendEmail");
      } finally {
        self.loadingResendEmail = false;
        return response;
      }
    });


    const onSendEmailVerification = flow(function* (data) {
      self.loadingEmailVerification = true;
      let response = null;
      try {
        const res = yield userApi.senddEmailVerification(data);
        response = res;
        self.verificationCode = response?.verification_code;
      } catch (error) {
        catchError(error, "onSendResendEmail");
      } finally {
        self.loadingEmailVerification = false;
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
    const projectSave = flow(function* (data) {
      self.loadingProjectSave = true;
      let response = null;
      try {
        const res = yield userApi.onProjectSave(data);
        if(res?.message?.includes('project saved successfully')){
          notification.success(res?.message);
          self.projectNameData = JSON.stringify(data)
        }
        response = res;
      } catch (error) {
        catchError(error, "projectSave");
      } finally {
        self.loadingProjectSave = false;
        return response;
      }
    });
    const conceptNote = flow(function* (data) {
      self.loadingConceptNote = true;
      let response = null;
      try {
        const res = yield userApi.onConceptNote(data);
        console.log('=======res', res);
        // if(res?.message?.includes('project saved successfully')){
        //   notification.success(res?.message);
        // }
        response = res;
      } catch (error) {
        catchError(error, "projectSave");
      } finally {
        self.loadingConceptNote = false;
        return response;
      }
    });
    const loadUserInfo = flow(function* (navigate = null) {
      self.loadingCurrentUser = true;
      let response = null;
      self.currentUserData =null;
      try {
        self.loadingCurrentUser = true;
        const res = yield userApi.getCurrentUserDetails();
        response = res;
        self.currentUserData = res;
      } catch (error) {
        catchError(error, "loadUserInfo");
        response = error.response;
        if (response?.status === 404) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingCurrentUser = false;
        return response;
      }
    });

    return {
      onUserLogin,
      onSignUpUser,
      loadUserInfo,
      onSendResendEmail,
      onResetPassword,
      onSendEmailVerification,
      projectSave,
      conceptNote
    };
  });

export function initUser() {
  return user.create({});
}
