import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { varServeur } from '../../../constants';
import './AdminCGV.scss';
import AdminMenu from '../AdminMenu';

class AdminCGV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cgv: '',
    };
    this.changeCGV = this.changeCGV.bind(this);
    this.updateCGV = this.updateCGV.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/cgv`)
      .then(results => results.json())
      .then((cgv) => {
        this.setState({ cgv });
      });
  }

  changeCGV(value) {
    this.setState({ cgv: value });
  }

  updateCGV() {
    const { cgv } = this.state;
    fetch(`${varServeur}admin/cgv`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cgv }),
    }).then((response) => {
      if (response.ok) {
        window.location.reload();
        window.scrollTo({
          top: 0,
        });
      }
    });
  }

  render() {
    const { cgv } = this.state;
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
      <div className="AdminCGV">
        <AdminMenu />
        <h1 className="title">CGV</h1>
        <Container>
          <Form>
            <FormGroup className="form-cgv">
              <br />
              <ReactQuill
                theme="snow"
                type="textarea"
                name="cgv"
                placeholder="Conditions Générales"
                value={cgv}
                modules={{ toolbar: toolbarOptions }}
                formats={formats}
                onChange={this.changeCGV}
                className="input-CGV"
              />
              <Button onClick={this.updateCGV} className="btn-submit all-btn btn-CGV">ENVOYER</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}


export default AdminCGV;
