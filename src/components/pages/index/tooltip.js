import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.css';

const TooltipTable = () => (
  <div>
    <div className={styles.tooltipArrow} />
    <div className={styles.tooltipLabel}>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </span>
    </div>
  </div>
);

const Tooltip = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const handleMouseOver = () => {
    setVisible(!isVisible);
  };
  const handleMouseOut = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
        onMouseOut={handleMouseOut}
        className={styles.tooltipButton}
      >
        {children}
      </div>
      {isVisible && <TooltipTable />}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
