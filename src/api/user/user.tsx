import { getAuthorizationHeader } from "../common-utils";
import axios from "axios";
import { baseUrl } from "../const";
import { BaseApi } from "../baseApi";

class UserApi extends BaseApi {
  onUserLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}signin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  onSignUpUser = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  sendResendEmail = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}sendResetEmail`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  senddEmailVerification = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}verifyEmail`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  resetPassword = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}resetPassword`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  onProjectSave = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}saveProject`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  onConceptNote = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}conceptNote`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getCurrentUserDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}getCurrent`, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  onGetExistingProject = async () => {
    try {
      const response = await axios.get(`${baseUrl}getProjects`, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  onDeleteProject = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}deleteProject`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  onGenerateProject = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}generateReport`, data, {
        headers: {
          Authorization: getAuthorizationHeader(),
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export default UserApi;
