import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors, Container, Paragraph } from '../styles/theme';

const Footer = styled.footer`
  background: ${Colors.Accent};
  padding: 10px;
  color: ${Colors.Main};
  font-size: 12px;
  font-weight: bold;
`;

class Foot extends Component {
  componentDidMount() {}
  render() {
    const Year = new Date().getFullYear();
    return (
      <Footer>
        <Container>
          <Paragraph center>&copy; {Year} Skin by Melissa. All Rights Reserved.</Paragraph>
        </Container>
      </Footer>
    );
  }
}

export default Foot;
