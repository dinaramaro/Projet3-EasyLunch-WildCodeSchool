import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Input, Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../constants';
import './AdminCGV.scss';
import 'react-quill/dist/quill.snow.css';

class AdminCGV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cgv: [],
      getcgv: '',
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

  changeCGV(value) {
    this.setState({ getcgv: value });
    console.log(this.state.getcgv)
  }

  updateCGV() {
    const { getcgv } = this.state;
    fetch(`${varServeur}admin/updatecgv`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ getcgv }),
    }).then((response) => {
      console.log("coucou")
      if (response.ok) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }

  render() {
    const { cgv, getcgv } = this.state;
    const displaycgv = cgv[0] && cgv[0].cgv;
    return (
      <div className="AdminCGV">
        <h1 className="title">CGV</h1>
        <Container>
          <Form>
            <FormGroup>
              <br />
              <ReactQuill
                theme="snow"
                type="textarea"
                name="cgv"
                placeholder="Conditions Générales"
                value={getcgv || displaycgv}
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
