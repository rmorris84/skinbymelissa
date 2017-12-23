import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors, Container, FontSecondary, Button, media } from '../styles/theme';

const fadeUp = keyframes`
 100% {
   opacity: 1;
   margin: 0;
 }
`;

const Header = styled.header`
  position: relative;
  color: white;
  background: linear-gradient(130deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) 100%),
    url('//www.skinbymelissa.com/img/bg-sticks.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.md`min-height: 90vh;`};
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  margin-top: 100px;
  animation: 1s ${fadeUp} 1s forwards;
`;

const Title = styled.h1`
  color: ${Colors.Main};
  font-family: ${FontSecondary};
  font-size: 50px;
  margin: 10px 0;
  ${media.md`font-size: 24px;`};
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  ${media.md`font-size: 18px;`};
`;

class Masthead extends Component {
  componentDidMount() {}
  render() {
    return (
      <Header>
        <Container>
          <Hero>
            <Title>Look Great. Feel Awesome.</Title>
            <Subtitle>
              The Best Brow, Waxing, &amp; Facial Experience in Jacksonville Beach.
            </Subtitle>
            <Button href="#contact">Get Started</Button>
          </Hero>
        </Container>
      </Header>
    );
  }
}

export default Masthead;
