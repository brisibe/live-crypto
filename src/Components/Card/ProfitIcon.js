import React, { memo } from "react";
import lose from "../../assets/lose-icon.svg";
import profit from "../../assets/profit-icon.svg";

let ProfitIcon = ({ isProfit }) => {
  const Icon = isProfit ? profit : lose;

  return <img src={Icon} alt="icon" />;
};

ProfitIcon = memo(ProfitIcon);

export default ProfitIcon;
