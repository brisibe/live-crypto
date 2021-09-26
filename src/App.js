import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import CardList from "./Components/CardList/CardList";
import CoinProfile from "./Components/Profile/CoinProfile";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1280px;
  width: 100%;
  height: calc(100vh - 90px - 90px);

  @media (min-width: 900px) {
    width: 50%;
  }
`;

const App = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <CardList />
          </Route>
          <Route path="/:name">
            <CoinProfile />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
