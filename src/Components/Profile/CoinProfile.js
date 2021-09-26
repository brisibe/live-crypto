import { useState, useEffect, memo } from "react";
import Chart from "../Chart";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import { getCryptoDataPrices } from "../../http";

const Wrapper = styled.div`
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 48px;

  h2 {
    margin-right: 8px;
  }
  h3 {
    margin-top: 2px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

let CoinProfile = () => {
  const [pricelist, setPricelist] = useState(null);
  const { state } = useLocation();
  const { name, image, price, id } = state;
  useEffect(() => {
    getCryptoDataPrices({ id }).then((res) => setPricelist(res.data));
  }, [id]);

  if (pricelist === null) {
    return <Spinner />;
  }

  const { prices } = pricelist;

  const newPrices = prices.map((arr) => arr[1]);

  return (
    <Wrapper>
      <Chart name={name} priceList={newPrices} />
      <InfoWrapper>
        <Img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
      </InfoWrapper>
    </Wrapper>
  );
};

CoinProfile = memo(CoinProfile);

export default CoinProfile;
