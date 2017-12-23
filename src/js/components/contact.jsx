import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Section, Button, Hr, media } from '../styles/theme';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.md`flex-direction: column;align-items: center;`};
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  ${media.md`text-align: center;margin-bottom: 20px;`};
`;

const Call = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  margin-bottom: 40px;
  ${media.md`order: -1;flex-basis: 100%`};
`;

const Connect = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-basis: 33%;
  text-align: right;
  ${media.md`text-align: center;`};
`;

class Contact extends Component {
  componentDidMount() {}
  render() {
    return (
      <Section color="true" id="contact">
        <Container>
          <h3>Contact Melissa</h3>
          <Hr />
          <Row>
            <Address>
              <h2 className="text-primary">Address</h2>
              <p>204 4th Ave S</p>
              <p>Jax Beach, FL 32250</p>
            </Address>
            <Call>
              <Button href="tel:9045717139">904-571-7139</Button>
            </Call>
            <Connect>
              <h2 className="text-primary">Contact</h2>
              <p>All of my Services are</p>
              <p>by Appointment Only</p>
            </Connect>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Contact;
