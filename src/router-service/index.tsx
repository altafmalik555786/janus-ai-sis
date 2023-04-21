import ForgotPassword from "@components/layout/main-layout/public-layout/forgot-password";
import CheckEmail from "@components/layout/main-layout/public-layout/forgot-password/check-email";
import ResetPasswordSuccessfully from "@components/layout/main-layout/public-layout/forgot-password/reset-password-successfully";
import SetNewPassword from "@components/layout/main-layout/public-layout/forgot-password/set-new-password";
import Login from "@components/layout/main-layout/public-layout/login";
import Signup from "@components/layout/main-layout/public-layout/signup";
import VerifyEmail from "@components/layout/main-layout/public-layout/signup/verify-email";
import StartingPage from "@components/layout/main-layout/public-layout/welcome-screen";
import Home from "@components/pages/home";
import SelectFunction from "@components/pages/project/select-function";
import ImportantProjectInfo from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import WhichToDo from "@components/pages/project/select-function/which-to-do";
import SelectOne from "@components/pages/project/select-function/which-to-do/select-one";
import ProjectName from "@components/pages/project/select-function/which-to-do/select-one/project-name";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={constRoute?.dashboard} element={<StartingPage />} />
        <Route path={constRoute?.login} element={<Login />} />
        <Route path={constRoute?.signup} element={<Signup />} />
        <Route path={constRoute?.forgetPassword} element={<ForgotPassword />} />
        <Route path={constRoute?.checkEmail} element={<CheckEmail />} />
        <Route path={constRoute?.setNewPassword} element={<SetNewPassword />} />
        <Route
          path={constRoute?.resetPasswordSuccessfully}
          element={<ResetPasswordSuccessfully />}
        />
        <Route path={constRoute?.verifyEmail} element={<VerifyEmail />} />
        <Route path={constRoute?.home} element={<Home />} />
        <Route path={constRoute?.selectFunction} element={<SelectFunction />} />
        <Route path={constRoute?.whichToDo} element={<WhichToDo />} />
        <Route path={constRoute?.selectOne} element={<SelectOne />} />
        <Route path={constRoute?.projectName} element={<ProjectName />} />
        <Route path={constRoute?.importantProjectInfo} element={<ImportantProjectInfo />} />

      </Routes>
    </>
  );
};
export default memo(Routing);
