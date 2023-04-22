import { constRoute } from "@utils/route";
import { Card, Dropdown, Menu, Row, Space } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import style from "../../../style.module.scss";
import { observer } from "mobx-react";
import { Popover, Button } from "antd";
import { resetStore, useStore } from "@stores/root-store";

const Header = observer(({ setCollapsed, collapsed }: any) => {
  const navigate = useNavigate();

  const {
    user: { getUserInfo },
  } = useStore(null);

  const onLogout = () => {
    resetStore();
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;

  useEffect(() => {
    if (data < 600) {
      setCollapsed(true);
    }
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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
              {/* <div className={style.avator}>
                <img src={ProfileImage} alt={"Profile Img"} />
              </div> */}
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
          {/* Logo */}
          <Link className={style.welcomeText} to={constRoute.dashboard}>
              Welcome
          </Link>
        </div>

        

        {/* /Header Title */}

        {/* Header Menu */}
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
