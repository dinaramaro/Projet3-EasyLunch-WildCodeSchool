import React from 'react';

const UserInfo = (props) => {
  const { info } = props;
  return (
    <div className="UserInfo">
      {info}
    </div>
  );
};

export default UserInfo;
