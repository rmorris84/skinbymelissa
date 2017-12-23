import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { FontSecondary, media } from '../styles/theme';

const Link = props => (
  <a className={props.className} href={props.link}>
    {props.title}
  </a>
);

Link.propTypes = {
  className: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

const fadeIn = keyframes`
 100% {
   opacity: 1;
 }
`;

const Navbar = styled.div`
  position: absolute;
  padding: 20px 40px;
  width: 100%;
  opacity: 0;
  animation: 1s ${fadeIn} 0.5s forwards;
  z-index: 2;
  list-style: none;
`;
const FlexNav = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.md`flex-direction: column;`};
`;
const NavLinks = styled.nav`
  display: flex;
`;
const Brand = styled(Link)`
  font-family: ${FontSecondary};
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: 24px;
  opacity: 1;
  ${media.md`margin-bottom: 20px;`};
`;

const NavLink = styled(Link)`
  font-family: ${FontSecondary};
  font-weight: 700;
  color: white;
  opacity: 0.8;
  text-decoration: none;
  margin: 0 10px;
  ${media.md`font-size: 14px;`};
`;

class Nav extends Component {
  componentDidMount() {
    $(document).ready(() => {
      let c;
      const navbar = $('#mainNav');
      const closeNav = $('#navbarResponsive');
      const navBurger = $('.navbar-toggler');
      $(window).scroll(() => {
        const a = $(window).scrollTop();
        const b = navbar.height();
        const currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass('scrollUp');
          closeNav.removeClass('show');
          navBurger.removeClass('show');
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass('scrollUp');
          closeNav.removeClass('show');
          navBurger.removeClass('show');
        }
        c = currentScrollTop;
      });
    });
  }
  render() {
    return (
      <Navbar>
        <FlexNav>
          <Brand title="Skin by Melissa" link="#">
            Skin by Melissa
          </Brand>
          <NavLinks>
            <NavLink title="About" link="#about" />
            <NavLink title="Skin Services" link="#services" />
            <NavLink title="Contact" link="#contact" />
          </NavLinks>
        </FlexNav>
      </Navbar>
    );
  }
}

export default Nav;
