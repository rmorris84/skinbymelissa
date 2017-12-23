import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Section, Paragraph, Hr, media } from '../styles/theme';

const Row = styled.div`
  display: flex;
  align-items: center;
  ${media.md`flex-direction: column;`};
`;
const Image = styled.div`
  ${media.md`align-self: center;margin-bottom: 30px;`};
`;
const Melissa = styled.img`
  width: 225px;
  border-radius: 50%;
  margin: 0 40px;
  ${media.md`width: 150px;`};
`;
const AboutInfo = styled.div`
  padding: 0 20px;
`;
const Title = styled.h3``;

class About extends PureComponent {
  componentDidMount() {}
  render() {
    return (
      <Section color="true" id="about">
        <Container>
          <Title>{this.props.title}</Title>
          <Hr />
          <Row>
            <Image>
              <Melissa src="//www.skinbymelissa.com/img/Melissa.jpg" alt="Melissa" />
            </Image>
            <AboutInfo>
              <Paragraph>{this.props.about}</Paragraph>
            </AboutInfo>
          </Row>
        </Container>
      </Section>
    );
  }
}

About.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
};

export default About;
