import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
}
  from 'reactstrap';
import { varServeur } from '../../../constants';
import './AddFAQ.scss';
import AdminMenu from '../AdminMenu';

class AddFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    const url = `${varServeur}admin/faq/`;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch(url, config)
      .then(res => res.text())
      .then((res) => {
        if (res === 'OK') {
          history.push('/admin/admin-faq');
        }
      });
  }

  render() {
    const { question, answer } = this.state;
    return (
      <div>
        <AdminMenu />
        <h2>Ajouter une question</h2>
        <Container className="AddFAQ">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="question">Question</Label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="question"
                id="question"
                value={question}
              />
            </FormGroup>

            <FormGroup>
              <Label for="answer">Réponse</Label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="answer"
                id="answer"
                value={answer}
              />
            </FormGroup>
            <div className="text-center">
              <Button onClick={this.handleSubmit} color="primary font2" className="mb-3">Ajouter</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddFAQ;
