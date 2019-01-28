import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import {
  Form, FormGroup, Label, Input, Col,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { handleChangeOrder } from '../../actions';
import './FormOrder.scss';


class FormOrder extends Component {
  handleChange = (e) => {
    const {
      handleChangeOrder, menuResto: { resto: { restoInfos } },
      idUser,
    } = this.props;
    handleChangeOrder(e.target.name, e.target.value, restoInfos.id, idUser);
  }

  render() {
    const { formulaire: { schedule, nb_users } } = this.props;
    const clsHour = ClassNames('hour', {
      mandatory: schedule === '',
    });
    const clsNbUser = ClassNames('nb-user', {
      mandatory: nb_users === '',
    });
    return (
      <div className="FormOrder">
        <p>Informations générales</p>
        <p>(concernent l&apos;ensemble des invités)</p>
        <Form>
          <FormGroup row>
            <Label for="date" sm={6}>Date</Label>
            <Col sm={6}>
              <Input type="text" name="date" id="date" value="Aujourd'hui" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="hour" sm={6}>Heure</Label>
            <Col sm={6}>
              <Input
                className={clsHour}
                type="select"
                name="schedule"
                id="hour"
                value={schedule}
                onChange={this.handleChange}
              >
                <option value="">Veuillez sélectionner</option>
                <option value="12h00">12h00</option>
                <option value="12h15">12h15</option>
                <option value="12h30">12h30</option>
                <option value="12h45">12h45</option>
                <option value="13h00">13h00</option>
                <option value="13h15">13h15</option>
                <option value="13h30">13h30</option>
                <option value="13h45">13h45</option>
                <option value="14h00">14h00</option>
                <option value="14h15">14h15</option>
                <option value="14h30">14h30</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="nb" sm={6}>Nombre de personnes</Label>
            <Col sm={6}>
              <Input
                className={clsNbUser}
                type="select"
                name="nb_users"
                id="nb"
                value={nb_users}
                onChange={this.handleChange}
              >
                <option value="">Veuillez sélectionner</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Input>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
};

function mstp(state) {
  return {
    formulaire: state.formOrder.formulaire,
    menuResto: state.menuResto,
    idUser: state.log.user.id,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ handleChangeOrder }, dispatch);
}

export default connect(mstp, mdtp)(FormOrder);
