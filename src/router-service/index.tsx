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
import ContextAndBaselineForm from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/context-and-baseline-form";
import ContextAndBaselineResults from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/context-and-baseline-form/context-and-baseline-results";
import ProjectDescriptionForm from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-description-form";
import ProjectDescriptionResults from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-description-form/project-description-results";
import ProjectResultsGcfForm from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form";
import ProjectResultsGcfResults from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form/project-results-gcf-results";
import ProjectResultsGcfForm24 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-24";
import ProjectResultsGcfResults32 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-24/project-results-gcf-results-32";
import ProjectResultsGcfForm32 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-32";
import ProjectResultsGcfResults40 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-32/project-results-gcf-results-40";
import ProjectResultsGcfResults48 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-40/project-results-gcf-results-48";
import ProjectResultsGcfForm40 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-40";
import ProjectResultsGcfForm48 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-48";
import ProjectResultsGcfResults56 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-48/project-results-gcf-results-56";
import ProjectResultsGcfForm56 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-56";
import ProjectResultsGcfResults64 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/project-results-gcf-form-56/project-results-gcf-results-64";
import NDAAEResults72 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/NDA-AE-form-64/NDA-AE-results-72";
import NDAAE64 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/NDA-AE-form-64";
import GcfJustificationForm72 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/gcf-justification-form-72";
import GcfJustificationResult90 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/gcf-justification-form-72/gcf-justification-result-90";
import SustainabilyReplicabiltyForm90 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/sustainabily-replicabilty-form-90";
import SustainabilyReplicabiltyResults100 from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/sustainabily-replicabilty-form-90/sustainabily-replicabilty-results-100";
import GCFCongratulation from "@components/pages/project/select-function/which-to-do/select-one/project-name/important-project-info/gcf-congratulation";
import ExistingProject from "@components/pages/ExistingProject/existingProject";
import Faqs from "@components/layout/main-layout/private-layout/faqs";
import TermOfUse from "@components/layout/main-layout/public-layout/term-of-use";
import PrivacyPolicy from "@components/layout/main-layout/public-layout/privacy-policy";

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
        <Route path={constRoute?.faqs} element={<Faqs />} />
        <Route path={constRoute?.selectFunction} element={<SelectFunction />} /> 
        <Route path={constRoute?.whichToDo} element={<WhichToDo />} />  
        <Route path={constRoute?.selectOne} element={<SelectOne />} /> 
        <Route path={constRoute?.projectName} element={<ProjectName />} />
        <Route path={constRoute?.importantProjectInfo} element={<ImportantProjectInfo />} />
        <Route path={constRoute?.contextAndBaselineForm} element={<ContextAndBaselineForm />} />
        <Route path={constRoute?.contextAndBaselineResults} element={<ContextAndBaselineResults />} />
        <Route path={constRoute?.projectDescriptionForm} element={<ProjectDescriptionForm />} />
        <Route path={constRoute?.projectDescriptionResults} element={<ProjectDescriptionResults />} />
        <Route path={constRoute?.projectResultsGcfForm} element={<ProjectResultsGcfForm />} />
        <Route path={constRoute?.projectResultsGcfResults} element={<ProjectResultsGcfResults />} />
        <Route path={constRoute?.projectResultsGcfForm24} element={<ProjectResultsGcfForm24 />} />
        <Route path={constRoute?.projectResultsGcfResults32} element={<ProjectResultsGcfResults32 />} /> 
        <Route path={constRoute?.projectResultsGcfForm32} element={<ProjectResultsGcfForm32 />} />
        <Route path={constRoute?.projectResultsGcfResults40} element={<ProjectResultsGcfResults40 />} />
        <Route path={constRoute?.projectResultsGcfForm40} element={<ProjectResultsGcfForm40 />} />
        <Route path={constRoute?.projectResultsGcfResults48} element={<ProjectResultsGcfResults48 />} />
        <Route path={constRoute?.projectResultsGcfForm48} element={<ProjectResultsGcfForm48 />} />
        <Route path={constRoute?.projectResultsGcfResults56} element={<ProjectResultsGcfResults56 />} />
        <Route path={constRoute?.projectResultsGcfForm56} element={<ProjectResultsGcfForm56 />} />
        <Route path={constRoute?.projectResultsGcfResults64} element={<ProjectResultsGcfResults64 />} />
        <Route path={constRoute?.ndaAe64Form} element={<NDAAE64 />} />
        <Route path={constRoute?.ndaAeResults72} element={<NDAAEResults72 />} />
        <Route path={constRoute?.gcfJustificationForm72} element={<GcfJustificationForm72 />} />
        <Route path={constRoute?.gcfJustificationResults90} element={<GcfJustificationResult90 />} />
        <Route path={constRoute?.sustainabilityReplicabilityForm90} element={<SustainabilyReplicabiltyForm90 />} />
        <Route path={constRoute?.sustainabilityReplicabilityResults100} element={<SustainabilyReplicabiltyResults100 />} />
        <Route path={constRoute?.gcfCongratulation} element={<GCFCongratulation />} />
        <Route path={constRoute?.existingProject} element={<ExistingProject />} /> 
        <Route path={constRoute?.TermOfUse} element={<TermOfUse />} /> 
        <Route path={constRoute?.setting} element={<PrivacyPolicy />} /> 
      </Routes>
    </>
  );
};
export default memo(Routing);
