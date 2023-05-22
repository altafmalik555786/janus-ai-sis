import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
import PrivateLayout from "./main-layout/private-layout";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";
const DefaultLayout = observer(() => {
  const navigate = useNavigate()
  const location = useLocation();
 const [isToken, setIsToken] = useState(localStorage.getItem("token"))
 const {
  user: {loadUserInfo, getCurrentUserData },
} = useStore(null);
  useEffect(() => {
    if (localStorage.getItem("token")?.length > 0) {
      setIsToken(localStorage.getItem("token"))
      // navigate(constRoute?.home)
    } else { 
      localStorage.removeItem("token")
      navigate(constRoute?.dashboard)
      setIsToken("")
    }
  }, [localStorage.getItem("token")])
  
  const handleLoadUserInfoDetal=async()=>{
    await loadUserInfo(navigate) 
   }
 useEffect(()=>{
  if(!location.pathname?.includes(constRoute.login)&& location.pathname!=='/'&&!location.pathname?.includes(constRoute.signup)&&!location.pathname?.includes(constRoute.verifyEmail)&&!location.pathname?.includes(constRoute.forgetPassword) &&!location.pathname?.includes(constRoute.TermOfUse) &&!location.pathname?.includes(constRoute.setting)) handleLoadUserInfoDetal()
 }, [navigate])
  return !(isToken) && <PublicLayout /> || <PrivateLayout /> ;
});
export default DefaultLayout;
