import React, { PureComponent } from 'react';

export default class UserInfo extends PureComponent {
  render() {
    const { info } = this.props;


    return (
      <div>
        <div>
          {info}
        </div>
      </div>
    );
  }
}
