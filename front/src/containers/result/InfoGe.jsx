import React from 'react';
import { connect } from 'react-redux';


const InfoGe = (props) => {
  const { formulaire: { date, schedule, nb_users } } = props;

  return (
    <div className="InfoGe">
      <p>Informations générales</p>
      <p>{`Date : ${date}`}</p>
      <p>{`Heure : ${schedule}`}</p>
      <p>{`Nombre de personnes : ${nb_users}`}</p>
    </div>
  );
};

function mstp(state) {
  return {
    formulaire: state.formOrder.formulaire,
  };
}

export default connect(mstp)(InfoGe);
