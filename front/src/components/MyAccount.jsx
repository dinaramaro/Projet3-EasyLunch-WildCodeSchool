import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      user,
      mail,
      phone,
      date,
    } = this.props;
    return (
      <div>
        nom:
        { user }
        mail:
        { mail }
        phone:
        { phone }
        date:
        { date }
      </div>
    );
  }
}

const mstp = state => ({
  user: state.log.user.name,
  mail: state.log.user.mail,
  phone: state.log.user.phone,
  date: state.log.user.createdAt,
});


export default connect(mstp, null)(MyAccount);
