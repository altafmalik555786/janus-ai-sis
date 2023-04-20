import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
import PrivateLayout from "./main-layout/private-layout";
const DefaultLayout = observer(() => {
  return !localStorage.getItem("token") && <PublicLayout /> || <PrivateLayout /> ;
});
export default DefaultLayout;
