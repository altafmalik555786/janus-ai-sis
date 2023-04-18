import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
const DefaultLayout = observer(() => {
  return <PublicLayout />;
});
export default DefaultLayout;
