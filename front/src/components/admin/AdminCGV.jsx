import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Input, Button,
} from 'reactstrap';
import { varServeur } from '../../constants';
import './AdminCGV.scss';

class AdminCGV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cgv: [],
    };
    this.changeCGV = this.changeCGV.bind(this);
    this.updateCGV = this.updateCGV.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/cgv`)
      .then(results => results.json())
      .then((data) => {
        this.setState({
          cgv: data,
        });
      });
  }

  changeCGV(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateCGV() {
    const { cgv } = this.state;
    fetch(`${varServeur}admin/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cgv }),
    }).then((response) => {
      if (response.ok) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }

  render() {
    const { cgv } = this.state;
    const displayCGV = cgv[0] && cgv[0].cgv;
    return (
      <div className="AdminCGV">
        <h1 className="title">CGV</h1>
        <Container>
          <Form>
            <FormGroup>
              <br />
              <Input
                type="textarea"
                name="cgv"
                placeholder="Conditions Générales"
                value={displayCGV}
                onChange={this.changeCGV}
                className="input-CGV"
              />
              <Button onClick={this.updateCGV} color="warning" className="btn-submit all-btn btn-CGV">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminCGV;
