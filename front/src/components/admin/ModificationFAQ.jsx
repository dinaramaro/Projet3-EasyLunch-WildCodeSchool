import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
}
  from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFAQId } from '../../actions/adminFAQId';


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
    const { getFetchFAQ, match } = this.props;
    getFetchFAQ(match.params.id);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch(`http://localhost:4000/api/about/faq/${this.props.match.params.id}`, config)
      .then(res => res.text())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('Erreur lors de la modification de la question');
        }
      }).catch((err) => {
        console.error(err);
        alert('Erreur lors de la modification de la question')
      });
  }

  render() {
    const { questionOne } = this.props;
    console.log('composant', questionOne);
    return (
      <div>
        <h2>Modifier une question</h2>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="question">Question</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="question"
                id="question"
                value={questionOne.length ? questionOne[0].question : ''}
              />
            </FormGroup>

            <FormGroup>
              <Label for="answer">Réponse</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="answer"
                id="answer"
                value={questionOne.length ? questionOne[0].answer : ''}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary font2" className="mb-3">Modifier</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

const mstp = state => ({
  questionOne: state.fetchFAQ.questions,
  loading: state.fetchFAQ.loading,
  error: state.fetchFAQ.error,
});

const mdtp = dispatch => (
  bindActionCreators({
    getFetchFAQ: fetchFAQId,
  }, dispatch)
);

export default connect(mstp, mdtp)(ModficationFAQ);
