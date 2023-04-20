import React from 'react'
import { observer } from 'mobx-react'
import style from "./style.module.scss"
import Vector from "@assets/icons/Vector.png";


const UpgradePlanBar = observer(() => {
  return (
    <div className={style.upgradePlanBarContainer} >
        <p>There’s more! With over 15+ new features in our premium plan, don’t miss out on an amazing opportunity. 
            <img src={Vector} alt="vector" />  
            <span>
            Upgrade now
            </span>
         </p>
    </div>
  )
})

export default UpgradePlanBar