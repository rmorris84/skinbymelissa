import styled, { css } from 'styled-components';

export const Colors = {
  Main: '#59c3c3',
  Accent: '#6247aa',
};

export const FontMain = "'Open Sans', san-serif;";
export const FontSecondary = "'Comfortaa', cursive;";

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 376,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const Container = styled.div`
  width: calc(100% - 2em);
  max-width: 1040px;
  margin: 0 auto;}
`;

export const Section = styled.section`
  background-color: ${props => (props.color ? Colors.Main : 'white')};
  ${props => (props.color ? 'color: white;' : 'color: inherit;')};
  position: relative;
  padding: 100px 0;
`;

export const Button = styled.a`
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  position: relative;
  background-color: ${Colors.Accent};
  font-family: ${FontSecondary};
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  padding: 20px 40px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 6px #382077;
  opacity: 1;
  ${media.md`padding: 18px 32px;`};
  &:hover {
    box-shadow: 0 4px #382077;
    top: 2px;
  }
  &:active {
    box-shadow: none;
    top: 6px;
  }
`;

export const Paragraph = styled.p`
  ${props => props.center && 'text-align: center;'};
`;

export const Hr = styled.hr`
  width: 250px;
  height: 3px;
  background-color: ${Colors.Accent};
  border: 0;
  margin-bottom: 50px;
  ${media.md`width: 150px;`};
`;
