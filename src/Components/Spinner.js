import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  .sk-three-bounce {
    width: calc(4em * 2);
    margin: auto;
    text-align: center;

    .sk-child {
      width: calc(4em / 2);
      height: calc(4em / 2);
      background-color: #3ece93;

      border-radius: 100%;
      display: inline-block;
      animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
    }

    .sk-bounce-1 {
      animation-delay: 0.32s;
    }
    .sk-bounce-2 {
      animation-delay: calc(0.32s / 2);
    }
  }

  @keyframes sk-three-bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default function Spinner() {
  return (
    <Wrapper>
      <section>
        <div className="sk-three-bounce">
          <div className="sk-bounce-1 sk-child"></div>
          <div className="sk-bounce-2 sk-child"></div>
          <div className="sk-bounce-3 sk-child"></div>
        </div>
      </section>
    </Wrapper>
  );
}
