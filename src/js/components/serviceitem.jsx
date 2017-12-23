import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/theme';

const slideInLeft = keyframes`
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
`;

const Service = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Line = styled.div`
  margin: 10px;
  flex: 1;
  border-bottom: 1px dotted ${Colors.Accent};
`;

const Price = styled.p`
  margin: 0;
`;

const Description = styled.p`
  flex-basis: 100%;
`;

class ServiceItem extends Component {
  componentDidMount() {}
  render() {
    return (
      <Service>
        <Name>{this.props.data.title}</Name>
        <Line />
        <Price>{this.props.data.price}</Price>
        {this.props.data.description && <Description>{this.props.data.description}</Description>}
      </Service>
    );
  }
}

ServiceItem.propTypes = {
  data: propTypes.objectOf(propTypes.string).isRequired,
};

export default ServiceItem;
