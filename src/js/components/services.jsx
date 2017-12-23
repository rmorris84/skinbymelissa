import React, { Component } from 'react';
import propTypes from 'prop-types';
import ServiceCat from './servicecat';
import { Container, Section, Hr } from '../styles/theme';

class Services extends Component {
  componentDidMount() {}
  render() {
    return (
      <Section id="services">
        <Container>
          <h3>{this.props.data.title}</h3>
          <Hr />
          {this.props.data.services && (
            <div className="col-12">
              {this.props.data.services.map(item => <ServiceCat key={item.title} data={item} />)}
            </div>
          )}
        </Container>
      </Section>
    );
  }
}

Services.propTypes = {
  data: propTypes.shape({
    services: propTypes.arrayOf(propTypes.object).isRequired,
  }).isRequired,
};

export default Services;
