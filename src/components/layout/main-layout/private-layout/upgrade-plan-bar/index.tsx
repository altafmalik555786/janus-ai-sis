import { observer } from "mobx-react";
import style from "./style.module.scss";
import styled from "styled-components";
import useWindowSize from "@utils/hooks/useWindowSize";

const UpgradePlanBar = observer(() => {
  const screenWidth = useWindowSize().width;
  return (
    <div className={style.upgradePlanBarContainer}>
      <Heading size={screenWidth < 537 && 10} weight={screenWidth < 430 && 400}>
        Your trial gives you access to premium features. Once your trial ends,
        you can upgrade or continue with a free basic plan.
        <div className={style.upgradeContainer}>
          {/* <img src={Vector} alt="vector" /> */}
          {/* <span>20 days left in trial</span> */}
        </div>
      </Heading>
    </div>
  );
});

export default UpgradePlanBar;

const Heading = styled.p<{ size?: any; weight?: any }>`
  font-family: Inter;
  font-style: normal;
  font-weight: ${(p) => (p.weight ? p.weight : 500)};
  font-size: ${(p) => (p.size ? p.size : 14)}px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-flow: wrap-reverse;
`;
