import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 90px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
`;

export default function Nav() {
  return (
    <Navbar>
      <Link to={"/"}>
        <img src={" /Icons/logo.svg"} alt="logo" />
      </Link>
    </Navbar>
  );
}
