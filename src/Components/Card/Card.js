import { useEffect, useState, memo } from "react";

import usePreviousPrice from "../../hooks/usePrevious";
import styled from "styled-components";
import ProfitIcon from "./ProfitIcon";
import { Link } from "react-router-dom";

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  height: 86px;

  @media (min-width: 900px) {
    height: 92px;
  }
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
`;
const InfoWrapper = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 14px;
  color: var(--gray-light);
  padding-top: 8px;

  @media (min-width: 900px) {
    height: 50px;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media (min-width: 900px) {
    flex-direction: row;

    width: 16%;
  }
`;
const Title = styled.p`
  font-size: 14px;
  color: #4f4f4f;
  font-weight: 600;
  letter-spacing: 0.2px;
  opacity: 0.9;

  @media (min-width: 900px) {
    font-size: 16px;
    padding-right: 20px;
  }
`;
const ShortTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  opacity: 0.7;

  @media (min-width: 900px) {
    margin-top: 4px;
  }
`;
const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    width: 10%;
  }
`;
const Rate = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${(props) => (props.isProfit ? "#3ece93" : "#ff461d")};

  @media (min-width: 900px) {
    padding-left: 20px;
  }
`;
const RatePercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  div {
    padding-left: 8px;
  }
`;

let Card = ({ id, name, image, symbol, price, percentage }) => {
  const [isProfit, setIsProfit] = useState(true);
  const prevPrice = usePreviousPrice(price);

  useEffect(() => {
    if (prevPrice > price || percentage < 0) {
      setIsProfit(false);
    }
  }, [prevPrice, price, percentage]);

  return (
    <Container>
      <Link
        to={{
          pathname: `/${name}`,
          state: { name, image, price, id },
        }}
      >
        <Wrapper>
          <Image src={image} alt={name} />
          <InfoWrapper>
            <TitleWrapper>
              <Title>{name}</Title>
              <ShortTitle>{symbol}</ShortTitle>
            </TitleWrapper>
            <RateWrapper>
              <Rate isProfit={isProfit}>
                ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Rate>
              <RatePercentageWrapper>
                <ProfitIcon isProfit={isProfit} />
                <div>{percentage.toFixed(2)}%</div>
              </RatePercentageWrapper>
            </RateWrapper>
          </InfoWrapper>
        </Wrapper>
      </Link>
    </Container>
  );
};

Card = memo(Card);

export default Card;
