import React from 'react';
import { connect } from 'react-redux';


const GeneralInformations = ({ formulaire: { date, schedule, nb_users } }) => (
  <div className="InfoGe">
    <p><i class="fa fa-calendar" /> {date}</p>
    <p><i className="fa fa-clock-o" /> {schedule}</p>
    <p><i className="fa fa-users" /> {nb_users}</p>
  </div>
);

function mstp(state) {
  return {
    formulaire: state.formOrder.formulaire,
  };
}

export default connect(mstp)(GeneralInformations);
