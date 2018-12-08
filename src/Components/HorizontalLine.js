import React from 'react';

const HorizontalLine = ({ lineProps }) => (
    <hr
      style={{
        color: lineProps.color,
        borderBottom: '0.1px solid #ececec',
        marginTop: lineProps.top,
        marginLeft: lineProps.left,
        marginRight: lineProps.right,
        marginBottom: lineProps.bottom,
      }}
    />
  );

export default HorizontalLine;
  