import React from 'react';

const UserInfo = (props) => {
  const { info } = props;
  return (
    <div>
      <div>
        {info}
      </div>
    </div>
  );
};

export default UserInfo;
