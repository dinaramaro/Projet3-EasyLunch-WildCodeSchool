import React from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Col,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { handleChangeOrder } from '../../actions';


const FormOrder = ({
  formulaire: { date, schedule, nb_users },
  handleChangeOrder, menuResto: { resto: { restoInfos } },
  log: { user },
}) => (
  <div className="FormOrder">
    <p>Commande (1/2)</p>
    <p>Informations générales</p>
    <p>(concernent l&apos;ensemble des invités)</p>
    <Form>
      <FormGroup row>
        <Label for="date" sm={3}>Date</Label>
        <Col sm={4}>
          <Input required type="select" name="date" id="date" value={date} onChange={e => handleChangeOrder(e.target.name, e.target.value, restoInfos.id, user.id)}>
            <option value="Aujourd'hui">Aujourd&apos;hui</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="hour" sm={3}>Heure</Label>
        <Col sm={4}>
          <Input type="select" name="schedule" id="hour" value={schedule} onChange={e => handleChangeOrder(e.target.name, e.target.value, restoInfos.id, user.id)}>
            <option>Veuillez sélectionner</option>
            <option value="12h00">12h00</option>
            <option value="12h15">12h15</option>
            <option value="12h30">12h30</option>
            <option value="12h45">12h45</option>
            <option value="13h00">13h00</option>
            <option value="13h15">13h15</option>
            <option value="13h30">13h30</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="nb" sm={3}>Nombre de personnes</Label>
        <Col sm={4}>
          <Input type="select" name="nb_users" id="nb" value={nb_users} onChange={e => handleChangeOrder(e.target.name, e.target.value, restoInfos.id, user.id)}>
            <option>Veuillez sélectionner</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Input>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

function mstp(state) {
  return {
    formulaire: state.formOrder.formulaire,
    menuResto: state.menuResto,
    log: state.log,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ handleChangeOrder }, dispatch);
}

export default connect(mstp, mdtp)(FormOrder);
