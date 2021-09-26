import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  display: grid;
  place-items: center;
  height: 90px;
  font-size: 14px;
  background-color: var(--bg-color);

  b {
    color: var(--green);
  }
  .surname {
    color: #eab300;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Designed and built by <b>Joseph</b> <b className="surname">Brisibe</b>
      </p>
    </Wrapper>
  );
}
