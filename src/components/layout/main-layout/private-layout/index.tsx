import { memo, useEffect, useState } from "react";
import Routing from "../../../../router-service";
import { observer } from "mobx-react";
import style from "../../style.module.scss";
import Header from "./header";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@utils/hooks/useTheme";
import { constRoute } from "@utils/route";
import UpgradePlanBar from "./upgrade-plan-bar";

const PrivateLayout = observer(() => {
  const { Sider, Content } = Layout;

  const theme = useTheme();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  // const {
  //   user: { loadUserInfo, getUserInfo },
  // } = useStore(null);

  // useEffect(() => {
  //   if (getUserInfo == null && window.location.pathname !== constRoute.login) {
  //     loadUserInfo(navigate);
  //   }
  // }, []);

  return (
    <div className={theme} >
      <Layout className={style.layoutSetting}>
        <Layout>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <UpgradePlanBar />
          <Content className={style.routingPagesContainer}>
            <Routing />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
});
export default memo(PrivateLayout);
