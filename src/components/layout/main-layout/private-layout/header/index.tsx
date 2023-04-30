import { constRoute } from "@utils/route";
import { Dropdown, Menu, Row, Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import type { MenuProps } from "antd";
import style from "./style.module.scss";
import { observer } from "mobx-react";
import { resetStore, useStore } from "@stores/root-store";
import CustomButton from "@components/common-components/custom-button";
import LogoutIcon from "@assets/icons/log-out.png";

const Header = observer(() => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("/home");
  const {
    user: { loadUserInfo, getCurrentUserData },
  } = useStore(null);
  const onLogout = () => {
    resetStore();
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;
  // const handleLoadUserInfoDetal=async()=>{
  //  await loadUserInfo(navigate)
  // }
  // useEffect(()=>{
  //     handleLoadUserInfoDetal()
  // }, [navigate])
  useEffect(() => {
    if (data < 855) {
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
      key: "/home",
    },
    { 
      label: "My Projects",
      key: "/myProjects",
    },
    {
      label: "FAQs",
      key: "/FAQs",
    },
    {
      label: "Get Expert Help",
      key: "/getExpertHelp",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  const dropdownMenu = (
    <div className={style.profileDropDonwMenu}>
      <div className={style.userData}>
        <b>{`${getCurrentUserData?.firstname || " "}  ${
          getCurrentUserData?.lastname || ""
        }`}</b>
        <p>{getCurrentUserData?.email || ""}</p>
      </div>

      <Menu>
        <Menu.Item
          onClick={() => {
            navigate(constRoute.profile);
          }}
        >
          Profile
        </Menu.Item> 
        <Menu.Item
          onClick={() => {
            navigate(constRoute?.setting);
          }}
        >
          Setting
        </Menu.Item>
        <Menu.Item className={style.itemWithImgIcon} onClick={onLogout}>
          <img src={LogoutIcon} alt="logout" />
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );

  const styles = { background: `linear-gradient(to right,#00c5fb, 0%, 100%)` };

  const menuMemoized = useMemo(
    () =>
      !collapsed && (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode={data > 576 ? "horizontal" : "vertical"}
          className={style.menuHeader}
          inlineCollapsed={false}
          items={items}
        />
      ),
    [collapsed, items]
  );

  return (
    <div className={style.topHeaderBar}>
      <div
        className={style.headerContainer}
        style={{ right: "0px", ...styles }}
      > 
        <div className={style.headerMenuContainer}>
          {(data < 855 || collapsed) && (
            <MenuOutlined
              onClick={() => setCollapsed(!collapsed)}
              className={style.menuOutlinedIcon}
            />
          )}
          <Link className={style.welcomeText} to={constRoute?.home}>
            <img src={welcomeLogo} alt="logo" />
          </Link>
        </div>

        {menuMemoized}

        <ul className={style.rightMenuHeader}>
          <li className={style.userProfileDropDownContainer}>
            <Row className={style.userProfileDropDownWrapper}>
              <CustomButton
                title="Add billing info"
                className={style.billingInfo} 
              />
              <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className={style.spaceUserProfile}>
                    <span className={style.profileUserNameText}>
                      Hi, {getCurrentUserData?.firstname || " "}
                    </span>
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
