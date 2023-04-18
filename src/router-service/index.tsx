import Login from "@components/layout/main-layout/public-layout/login";
import Signup from "@components/layout/main-layout/public-layout/signup";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path={constRoute?.dashboard} element={<Login />} />
          <Route path={constRoute?.login} element={<Login />} />
          <Route path={constRoute?.signup} element={<Signup />} />
      </Routes>
    </>
  );
};
export default memo(Routing);
