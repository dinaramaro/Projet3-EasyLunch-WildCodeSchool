import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../constants';
import './AdminPolitic.scss';

class AdminPolitic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      politic: '',
    };
    this.changePolitic = this.changePolitic.bind(this);
    this.updatePolitic = this.updatePolitic.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/politic`)
      .then(results => results.json())
      .then((politic) => {
        this.setState({ politic });
      });
  }

  changePolitic(value) {
    this.setState({ politic: value });
  }

  updatePolitic() {
    const { politic } = this.state;
    fetch(`${varServeur}admin/politic`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ politic }),
    }).then((response) => {
      if (response.ok) {
        window.scrollTo({
          top: 0,
        });
      }
    });
  }

  render() {
    const { politic } = this.state;
    return (
      <div className="AdminPolitic">
        <h1 className="title">Politique de confidentialité</h1>
        <Container>
          <Form>
            <FormGroup>
              <br />
              <ReactQuill
                theme="snow"
                type="textarea"
                name="politic"
                placeholder="Politique de Confidentialité"
                value={politic}
                onChange={this.changePolitic}
                className="input-politic"
              />
              <Button onClick={this.updatePolitic} color="warning" className="btn-submit all-btn btn-politic">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminPolitic;
