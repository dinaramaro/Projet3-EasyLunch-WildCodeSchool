import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import AdminMenu from '../AdminMenu';
import './AdminContactRestaurant.scss';

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
    const toolbarOptions = [
      [{ header: [1, 2, 3, false] }, { color: [] }, 'bold', 'italic', 'underline'],
      [{ align: ['', 'center', 'right', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ];

    const formats = [
      'header', 'font', 'size', 'color',
      'bold', 'italic', 'underline', 'align', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video',
    ];

    return (
      <div className="AdminContactRestaurant">
        <AdminMenu />
        <h1 className="title">Vous êtes restaurateur?</h1>
        <Container>
          <Form className="form-contact-resto" onSubmit={this.updateContact}>
            <ReactQuill
              theme="snow"
              type="textarea"
              name="contact-restaurant"
              placeholder="Vous êtes restaurateur"
              value={text}
              modules={{ toolbar: toolbarOptions }}
              formats={formats}
              onChange={this.changeContact}
              className="input-contactRestaurant"
            />
            <Button className="btn-submit all-btn btn-contact-resto">ENVOYER</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminContactRestaurant;
