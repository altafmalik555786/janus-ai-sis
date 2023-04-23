import { constRoute } from "@utils/route";
import { Dropdown, Menu, Row, Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import type { MenuProps } from "antd";
import style from "./style.module.scss";
import { observer } from "mobx-react";
import { resetStore, useStore } from "@stores/root-store";

const Header = observer(() => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const onLogout = () => {
    resetStore();
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;

  useEffect(() => {
    if (data < 576) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [data]);


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(constRoute.login);
    }
  }, []);

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "My Projects",
      key: "myProjects",
    },
    {
      label: "FAQs",
      key: "FAQs",
    },
    {
      label: "Get Expert Help",
      key: "getExpertHelp",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const dropdownMenu = (
    <Menu className="nav-dropdown">
      <Menu.Item
        onClick={() => {
          navigate(constRoute.profile);
        }}
      >
        <UserOutlined style={{ marginRight: "5px" }} />
        Profile
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          navigate(constRoute?.setting);
        }}
      >
        <SettingOutlined style={{ marginRight: "5px" }} />
        Setting
      </Menu.Item>
      <Menu.Item onClick={onLogout}>
        <LogoutOutlined style={{ marginRight: "5px" }} />
        Logout
      </Menu.Item>
    </Menu>
  );

  const styles = { background: `linear-gradient(to right,#00c5fb, 0%, 100%)` };

  const menuMemoized = useMemo(
    () =>
      !collapsed && (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode={ (data > 576) ? "horizontal" : "vertical" }
          className={style.menuHeader}
          inlineCollapsed={false}
          items={items}
        />
      ),
    [collapsed]
  );

  return (
    <div className={style.topHeaderBar}>
      <div
        className={style.headerContainer}
        style={{ right: "0px", ...styles }}
      >
        <div className={style.headerMenuContainer}>
          { ( data < 576 ||
            collapsed ) && (
              <MenuOutlined
                onClick={() => setCollapsed(!collapsed)}
                className={style.menuOutlinedIcon}
              />
            )}
          <Link className={style.welcomeText} to={constRoute?.dashboard}>
            <img src={welcomeLogo} alt="logo" />
          </Link>
        </div>

        {menuMemoized}

        <ul className={style.rightMenuHeader}>
          <li className={style.userProfileDropDownContainer}>
            <Row className={style.userProfileDropDownWrapper}>
              <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="header-dropdown">
                    <span className={style.profileUserNameText}>Hi, John</span>
                    <span className="mobile">
                      <i className="fa fa-ellipsis-v" />
                    </span>
                    <DownOutlined className={style.profileUserNameText} />
                  </Space>
                </a>
              </Dropdown>
            </Row>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Header;
