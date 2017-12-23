import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors, media } from '../styles/theme';

const MapFrame = styled.div`
  border-top 2px solid ${Colors.Main};
  position: relative;
  overflow: hidden;
`;

const GoogleMap = styled.iframe`
  border: none;
  width: 100%;
  height: 500px;
  ${media.lg`height:400px;`};
  ${media.md`height:300px;`};
  ${media.sm`height:250px;`};
`;

class Map extends Component {
  render() {
    return (
      <MapFrame>
        <GoogleMap title="Google Map" src="https://snazzymaps.com/embed/29508" />
      </MapFrame>
    );
  }
}

export default Map;
