import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph } from '../styles/theme';
import ServiceItem from './serviceitem';

const Category = styled.div`
  margin-top: 80px;
`;

const CatTitle = styled.h4`
  margin-bottom: 20px;
`;

class ServiceCat extends Component {
  componentDidMount() {}
  render() {
    return (
      <Category>
        <CatTitle>{this.props.data.title}</CatTitle>
        <Paragraph center>{this.props.data.subtitle}</Paragraph>
        {this.props.data &&
          this.props.data.service.map(item => <ServiceItem key={item.title} data={item} />)}
      </Category>
    );
  }
}

ServiceCat.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    service: propTypes.arrayOf(propTypes.object).isRequired,
  }).isRequired,
};

export default ServiceCat;
