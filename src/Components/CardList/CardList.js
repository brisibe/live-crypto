import styled from "styled-components";
import Card from "../Card/Card";
import { getCryptData } from "../../http";
import Spinner from "../Spinner";
import React, { useEffect, useState, memo } from "react";

const Wrapper = styled.section`
  margin-top: 3 0px;
  width: 100%;
`;

let CardList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data === null) {
      getCryptData().then(
        (res) => setData(res.data),
        () => setError(true)
      );
    }
    const int = setInterval(async () => {
      const res = await getCryptData();
      setData(res.data);
    }, 5000);

    return () => {
      clearInterval(int);
    };
  }, [data]);

  if (error) {
    return <div>Opps!!! something went wrong, please try after some time.</div>;
  }

  if (data === null) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      {data.map(
        ({
          id,
          name,
          image,
          symbol,
          current_price,
          price_change_percentage_24h,
        }) => {
          return (
            <Card
              key={id}
              name={name}
              image={image}
              symbol={symbol}
              price={current_price}
              percentage={price_change_percentage_24h}
              id={id}
            />
          );
        }
      )}
    </Wrapper>
  );
};

CardList = memo(CardList);

export default CardList;
