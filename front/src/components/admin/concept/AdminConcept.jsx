import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import './AdminConcept.scss';

class AdminConcept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concept: '',
    };
    this.changeConcept = this.changeConcept.bind(this);
    this.updateConcept = this.updateConcept.bind(this);
  }

  componentDidMount() {
    this.fetchAdminConcept();
  }

  fetchAdminConcept() {
    fetch(`${varServeur}admin/concept`)
      .then(results => results.json())
      .then((concept) => {
        this.setState({ concept });
      });
  }

  changeConcept(value) {
    this.setState({ concept: value });
  }

  updateConcept() {
    const { concept } = this.state;
    fetch(`${varServeur}admin/concept`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ concept }),
    }).then((response) => {
      if (response.ok) {
        window.location.reload();
      }
    });
  }

  render() {
    const { concept } = this.state;

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
      <div className="AdminConcept">
        <h1 className="title">Concept</h1>
        <Container>
          <Form>
            <FormGroup>
              <br />
              <ReactQuill
                theme="snow"
                modules={{ toolbar: toolbarOptions }}
                formats={formats}
                type="textarea"
                name="concept"
                placeholder="Concept"
                value={concept}
                onChange={this.changeConcept}
                className="input-concept"
              />
              <Button onClick={this.updateConcept} className="btn-submit all-btn btn-concept">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminConcept;
