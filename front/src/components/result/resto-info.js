import React from 'react';

const RestoInfo = (props) => {
  const { info } = props;
  const displayName = `${info.titre}`;

  return (
    <div>
      {displayName}
    </div>
  );
};

export default RestoInfo;
