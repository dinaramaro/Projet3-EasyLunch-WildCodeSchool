import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Input, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchCGV } from '../../actions/admin';
import { varServeur } from '../../constants';
import './AdminCGV.scss';

class AdminCGV extends Component {
  componentDidMount = () => {
    const { fetchCGV } = this.props;
    fetchCGV(`${varServeur}/about/cgv`);
  };

  render() {
    const { CGV } = this.props;
    const displayCGV = CGV[0] && CGV[0].cgv;
    return (
      <div className="AdminCGV">
        <h1 className="title">CGV</h1>
        <Container>
          <Form>
            <FormGroup>
              <br />
              <p>{displayCGV}</p>
              <Input
                type="textarea"
                name="text"
                placeholder="Conditions Générales"
              />
            </FormGroup>
            <Button>ENVOYER</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

function mstp(state) {
  return {
    CGV: state.dataCGV,
  };
}

function mdtp(dispatch) {
  return {
    fetchCGV: url => dispatch(fetchCGV(url)),
  };
}

export default connect(
  mstp,
  mdtp,
)(AdminCGV);
