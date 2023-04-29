import { cast, flow, types } from "mobx-state-tree";
import { userApi } from "../../api";
import { notification } from "../../utils/notifications";
import { constRoute } from "@utils/route";
import { catchError, onLogOutClearAll } from "@utils/common-functions";
import {
  
  currentUserModel,
  getProjectModel,
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
    loadExistingProject: types.optional(types.boolean, false), 
    loadingDeleteRecord: types.optional(types.boolean, false), 
    loadingProjectData: types.optional(types.boolean, false), 
    projectList: types.maybeNull(types.string),
    loadingGenerateReport: types.optional(types.boolean, false), 
    getProjectData: types.maybeNull(getProjectModel),
    loadingSingleProjectData: types.optional(types.boolean, false),
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
    },
    get getLoadingDeleteRecord(){
      return  toJS(self.loadingDeleteRecord);
    },
    get getProjectListData (){
      return toJS(self.projectList);
    },
    get getLoadingExistingProject(){
      return toJS(self.loadExistingProject)
    },
    get getLoadingGenerateReport (){
      return toJS(self.loadingGenerateReport)
    },
    get getProjectDataList(){
      return toJS(self.getProjectData)
    },
    get getLoadingGetProject(){
      return toJS(self.loadingSingleProjectData)
    }
  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      try {
        const res = yield userApi.onUserLogin(data);
          localStorage.setItem("token", res?.jwt_token);
          if(res?.jwt_token){
           loadUserInfo().then((data) => {
            if(data?.data?.error?.includes('Invalid token')){
              catchError(data, "loadUserInfo");  
              navigate(`${constRoute.login}`);
            } else{
              notification.success("Signed in successfully");
              navigate(`${constRoute.home}`);
            }
            
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
          notification.success('Project saved successfully');
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
        // if(res?.message?.includes('project saved successfully')){
        //   notification.success(res?.message);
        // }
        response = res;
      } catch (error) {
        catchError(error, "conceptNote");
      } finally {
        self.loadingConceptNote = false;
        return response;
      }
    });
    const loadUserInfo = flow(function* (navigate = null) {
      self.loadingCurrentUser = true;
      let response = null;
      // self.currentUserData =null;
      try {
        self.loadingCurrentUser = true;
        const res = yield userApi.getCurrentUserDetails();
        response = res;
        self.currentUserData = res;
      } catch (error) {
        catchError(error, "loadUserInfo");
        response = error.response;
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingCurrentUser = false;
        return response;
      }
    });
    const loadGetExistingProject = flow(function* (navigate = null) {
      self.loadExistingProject = true;
      let response = null;
      // self.currentUserData =null;
      try {
        self.loadExistingProject = true;
        const res = yield userApi.onGetExistingProject();
        response = res;
        const dummyArray=[];
        res?.projects['concept note']?.forEach(item => {
          dummyArray?.push({'projectName': item})
        });
        self.projectList= JSON.stringify(dummyArray);
      } catch (error) {
        catchError(error, "getProject");
        response = error.response;
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadExistingProject = false;
        return response;
      }
    });
    const projectDelete = flow(function* (data, navigate=null) {
      self.loadingDeleteRecord = true;
      let response = null;
      try {
        const res = yield userApi.onDeleteProject(data);
        if(res?.message?.includes('project deleted')){
          notification.success('Project Deleted');
        }
        response = res;
      } catch (error) {
        catchError(error, "deleteProject");
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingDeleteRecord = false;
        return response;
      }
    });
    const getSingleProjectData = flow(function* (data, navigate=null) {
      self.loadingSingleProjectData = true;
      let response = null;
      try {
        const res = yield userApi.onGetData(data);        
        response = res;
        self.getProjectData= res
      } catch (error) {
        catchError(error, "getData");
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingSingleProjectData = false;
        return response;
      }
    });
    const generateReport = flow(function* (data, navigate=null) {
      self.loadingGenerateReport = true;
      let response = null;
      try {
        const res = yield userApi.onGenerateProject(data);
        self.getProjectData= res;
        // if(res?.message?.includes('project deleted')){
        //   notification.success('Generated Report');
        // }
        response = res;
      } catch (error) {
        catchError(error, "generateReport");
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingGenerateReport = false;
        return response;
      }
    });
    const setProjectName =  (projectName='')=>{
      const data={
        project_name  : projectName
      };
      self.projectNameData = JSON?.stringify(data)
      }

    return {
      onUserLogin,
      onSignUpUser,
      loadUserInfo,
      onSendResendEmail,
      onResetPassword,
      onSendEmailVerification,
      projectSave,
      conceptNote,
      loadGetExistingProject,
      projectDelete, 
      generateReport,
      getSingleProjectData,
      setProjectName
    };
  });

export function initUser() {
  return user.create({});
}
