import React from 'react';

const RestoInfo = (props) => {
  const { info } = props;
  const displayName = `${info.name}`;

  return (
    <div>
      {displayName}
    </div>
  );
};

export default RestoInfo;
