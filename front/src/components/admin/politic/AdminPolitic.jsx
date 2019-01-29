import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import './AdminPolitic.scss';
import AdminMenu from '../AdminMenu';

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
        window.location.reload();
      }
    });
  }

  render() {
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
    const { politic } = this.state;
    return (
      <div className="AdminPolitic">
        <AdminMenu />
        <h1 className="title">Politique de confidentialité</h1>
        <Container>
          <Form>
            <FormGroup className="form-politic">
              <br />
              <ReactQuill
                theme="snow"
                type="textarea"
                name="politic"
                placeholder="Politique de Confidentialité"
                value={politic}
                modules={{ toolbar: toolbarOptions }}
                formats={formats}
                onChange={this.changePolitic}
                className="input-politic"
              />
              <Button onClick={this.updatePolitic} className="btn-submit all-btn btn-politic">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminPolitic;
