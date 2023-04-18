import { constRoute } from "@utils/route";
import { Card, Dropdown, Menu, Row, Space } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import style from "../../../style.module.scss";
import { observer } from "mobx-react";
import { Popover, Button } from "antd";
import ProfileImage from "@assets/images/profile-image.png";
import BellIconDark from "@assets/icons/bell-icon-dark.png";
import { CAP_HELLO, LOWER_THEME, LOWER_TOKEN, UPPER_O_BET } from "@utils/const";
import useFitText from "use-fit-text";
import { resetStore, useStore } from "@stores/root-store";
import { getUserOnRole } from "@utils/common-functions";
import ToggleTheme from "./toggle-theme";

const Header = observer(({ setCollapsed, collapsed }: any) => {
  const { fontSize, ref } = useFitText();
  const navigate = useNavigate();

  const {
    user: { getUserInfo },
  } = useStore(null);

  const onLogout = () => {
    resetStore()
    localStorage.removeItem(LOWER_TOKEN);
    localStorage.removeItem(LOWER_THEME);
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;

  useEffect(() => {
    if (data < 600) {
      setCollapsed(true);
    }
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem(LOWER_TOKEN)) {
      navigate(constRoute.login);
    }
  }, []);

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

  const notificationsContent = () => {
    return (
      <Card
        title="Notifications"
        extra={<a href="#">Mark all as read</a>}
        className={style.notificationCard}
      >
        <div className={style.mainDiv}>
          <div className={style.notificationProfile}>
            <div className={style.notificationImage}>
              <div className={style.avator}>
                <img src={ProfileImage} alt={"Profile Img"} />
              </div>
              <div>
                <div className={style.employeeName}>
                  Corina McCoy
                  <p>punch in for today.</p>
                </div>
              </div>
            </div>
            <div className={style.punchTime}>20 seconds ago</div>
          </div>
          <div className={style.notificationProfile}>
            <div className={style.notificationImage}>
              <div className={style.avator}>
                <img src={ProfileImage} alt={"Profile Img"} />
              </div>
              <div>
                <div className={style.employeeName}>
                  Corina McCoy
                  <p>punch in for today.</p>
                </div>
              </div>
            </div>
            <div className={style.punchTime}>20 seconds ago</div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div>
      <div
        className={style.headerContainer}
        style={{ right: "0px", ...styles }}
      >
        {/* Logo */}
        <div className={style.welcomeBox}>
          <MenuOutlined
            onClick={() => setCollapsed(!collapsed)}
            className={style.menuOutlined}
          />
          <Link className={style.welcomeText} to={constRoute.dashboard}>
            <div ref={ref} style={{ fontSize }} className={style.textContainer}>
              Welcome to 1<i>{UPPER_O_BET}</i>
            </div>
          </Link>
        </div>

        <div className={style.userRole}>
          <h1>{getUserOnRole(getUserInfo?.role).name}</h1>
        </div>

        {/* /Header Title */}

        {/* Header Menu */}
        <ul className={style.rightMenuHeader}>
          <div className={style.themeBtnContaienr}>
            <ToggleTheme />
          </div>
          <div className={style.BLDivContainer}>
            <span className={style.Lspan}>
              L: {getUserInfo?.canSettlePL || 0}
            </span>
            <span className={style.Bspan}>B: {getUserInfo?.balance || 0}</span>
          </div>
          {/* <li className={style.bellIconLi}>
          <Button
            type="text"
            shape="circle"
            icon={<img src={SettingLight} />}
          />
        </li> */}
          <Popover
            content={notificationsContent}
            placement="bottomRight"
            trigger="click"
            overlayClassName="noti-wrapper"
          >
            <li className={style.bellIconLi}>
              <Button
                type="text"
                shape="circle"
                icon={<img src={BellIconDark} />}
              />
            </li>
          </Popover>
          <li className={style.userProfileDropDownContainer}>
            <Row className={style.userProfileDropDownWrapper}>
              {/* <div className={style.ProfileImageLogo}>
              <Tooltip title={getUserInfo?.userName || CAP_HELLO + "!"}>
                <img src={""} />
              </Tooltip>
            </div> */}
              <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="header-dropdown">
                    <span className={style.profileUserNameText}>
                      {" "}
                      {getUserInfo?.userName || CAP_HELLO + "!"}
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
