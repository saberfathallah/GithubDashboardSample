import React from "react";
import PropTypes from 'prop-types';
import headerWrapper from "./HeaderWrapper";

const Header = ({ className }) => (
  <div className={className}>
    <p className="header-title">Github Dashboard Sample</p>
  </div>);

Header.propTypes = {
  className: PropTypes.string,
};

export default headerWrapper(Header);
