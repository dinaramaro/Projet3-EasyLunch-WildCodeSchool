import React, { Component } from 'react';
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
import { toggleTab } from '../../actions';


class RestoInfoPin extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(e) {
    e.stopPropagation();
    const { info, menuResto, toggleTab } = this.props;
    toggleTab();
    menuResto(`${varServeur}restaurant/menus/${info.id}`);
  }

  render() {
    const { menuResto: { loading, error }, info, onClickCard } = this.props;
    if (error) {
      return <div>{`Error! ${error.message}`}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <Card className="RestoInfoPin" onClick={onClickCard}>
        <CardImg top width="100%" src={info.picture} alt="Card image cap" />
        <CardBody>
          <CardTitle>{info.name}</CardTitle>
          <CardSubtitle>{info.address}</CardSubtitle>
          <CardText>{info.city}</CardText>
          <button
            type="button"
            className="showMenu"
            onClick={this.showMenu}
          >
            Voir la carte du restaurant
          </button>
        </CardBody>
      </Card>
    );
  }
}

function mdtp(dispatch) {
  return bindActionCreators({ menuResto, toggleTab }, dispatch);
}

export default withRouter(
  connect(null, mdtp)(RestoInfoPin),
);
