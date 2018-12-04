import React from 'react';

const RestoInfo = (props) => {
  const { info } = props;
  const displayName = `${info.titre}`;

  return (
    <div>
      <div>
        {displayName}
      </div>
    </div>
  );
};

export default RestoInfo;
