import React, { PureComponent } from 'react';

export default class RestoInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.titre}`;

    return (
      <div>
        <div>
          {displayName}
        </div>
      </div>
    );
  }
}
