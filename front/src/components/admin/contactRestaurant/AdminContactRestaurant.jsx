import React, { Component } from 'react';
import {
  Container,
  Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import AdminMenu from '../AdminMenu';

class AdminContactRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.changeContact = this.changeContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact-restaurant`)
      .then(res => res.json())
      .then(data => this.setState({ text: data }));
  }

  changeContact(value) {
    console.log(value);
    this.setState({
      text: value,
    });
  }

  updateContact() {
    const { text } = this.state;
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    };
    fetch(`${varServeur}admin/contact-restaurant`, config)
      .then((res) => {
        if (res.ok) {
          window.location.reload();
        }
      });
  }


  render() {
    const { text } = this.state;
    return (
      <div>
        <AdminMenu />
        <h1 className="title">Vous êtes restaurateur?</h1>
        <Container>
          <p>
            <ReactQuill
              theme="snow"
              type="textarea"
              name="contact-restaurant"
              placeholder="Vous êtes restaurateur"
              value={text}
              onChange={this.changeContact}
            />
            <Button onClick={this.updateContact} color="warning" className="btn-submit all-btn">ENVOYER</Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default AdminContactRestaurant;
