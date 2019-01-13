import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { withRouter } from 'react-router';
import { varServeur } from '../../constants';
import { menuResto } from '../../actions/menuResto';


const RestoInfoPin = (props) => {
  const infoResto = (id) => {
    const { menuResto } = props;
    menuResto(`${varServeur}restaurant/menus/${id}`);
  };

  const { menuResto: { loading, error } } = props;
  if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const { info } = props;
  return (
    <Card className="RestoInfoPin">
      <CardImg top width="100%" src={info.picture} alt="Card image cap" />
      <CardBody>
        <CardTitle>{info.name}</CardTitle>
        <CardSubtitle>{info.address}</CardSubtitle>
        <CardText>{info.city}</CardText>
        <button className="showMenu" type="button" onClick={infoResto(info.id)}>Voir la carte du restaurant</button>
      </CardBody>
    </Card>
  );
}

function mdtp(dispatch) {
  return bindActionCreators({ menuResto }, dispatch);
}

export default withRouter(
  connect(null, mdtp)(RestoInfoPin),
);
