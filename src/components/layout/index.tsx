import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
import PrivateLayout from "./main-layout/private-layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
const DefaultLayout = observer(() => {
  const navigate = useNavigate()
 const [isToken, setIsToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    if (localStorage.getItem("token")?.length > 0) {
      setIsToken(localStorage.getItem("token"))
      navigate(constRoute?.home)
    } else { 
      localStorage.removeItem("token")
      navigate(constRoute?.dashboard)
      setIsToken("")
    }
  }, [localStorage.getItem("token")])
  

  return !(isToken) && <PublicLayout /> || <PrivateLayout /> ;
});
export default DefaultLayout;
