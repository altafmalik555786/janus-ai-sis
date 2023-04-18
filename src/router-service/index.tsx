import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@components/login";

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path={constRoute?.dashboard} element={<Login />} />
          <Route path={constRoute?.login} element={<Login />} />
      </Routes>
    </>
  );
};
export default memo(Routing);
