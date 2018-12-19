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
import './ModificationFAQ.scss';


class ModficationFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`${varServeur}admin/faq/${match.params.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ question: data[0].question, answer: data[0].answer });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { match, history } = this.props;
    e.preventDefault();
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch(`${varServeur}admin/faq/${match.params.id}`, config)
      .then(res => res.text())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('La question a bien été modifiée');
          history.push('/admin/adminfaq');
        }
      }).catch((err) => {
        console.error(err);
        alert('Erreur lors de la modification de la question');
      });
  }

  render() {
    const { question } = this.state;
    const { answer } = this.state;
    return (
      <div>
        <h2>Modifier une question</h2>
        <Container className="ModificationFAQ">
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
              <Button onClick={this.handleSubmit} className="mb-3">Modifier</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ModficationFAQ;
