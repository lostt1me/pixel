
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/shared/header';

const LayoutMain = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
