
import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import './AdminContact.scss';
import AdminMenu from '../AdminMenu';

class AdminContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactText: '',
    };
    this.changeContact = this.changeContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact`)
      .then(results => results.json())
      .then(data => this.setState({ contactText: data }));
  }

  changeContact(data) {
    this.setState({ contactText: data });
  }

  updateContact() {
    const { contactText } = this.state;
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contactText }),
    };
    fetch(`${varServeur}admin/contact`, config)
      .then((res) => {
        if (res.ok) {
          window.location.reload();
        }
      });
  }

  render() {
    const { contactText } = this.state;
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
      <div className="Contact">
        <AdminMenu />
        <h1>Nous contacter</h1>
        <Container>
          <Form>
            <FormGroup>
              <ReactQuill
                theme="snow"
                type="textarea"
                name="contact"
                placeholder="Nous contacter"
                value={contactText}
                modules={{ toolbar: toolbarOptions }}
                formats={formats}
                onChange={this.changeContact}
              />
              <Button onClick={this.updateContact} color="warning" className="btn-submit all-btn">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminContact;
