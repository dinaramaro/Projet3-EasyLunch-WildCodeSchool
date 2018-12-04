import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFAQ } from '../../actions/adminFAQAction';


class adminFAQ extends Component {
  componentDidMount() {
    const { getFetchFAQ } = this.props;
    getFetchFAQ();
  }

  render() {
    const { questions } = this.props;
    return (
      <Container className="FAQ">
        <Row>
          <Col>
            <h1 className="title">FAQ</h1>
          </Col>
        </Row>
        <Row>
          <table className="tablefaq">
            <tr>
              <th>Liste des questions</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>

            {questions.map(item => (
              <tr>
                <td>
                  {item.question}
                </td>
                <td>
                  <Button>Modifier</Button>
                </td>
                <td>
                  <Button>Supprimer</Button>
                </td>
              </tr>
            ))}


          </table>
        </Row>
      </Container>
    );
  }
}

const mstp = state => ({
  questions: state.fetchFAQ.questions,
  loading: state.fetchFAQ.loading,
  error: state.fetchFAQ.error,
});

const mdtp = dispatch => (
  bindActionCreators({
    getFetchFAQ: fetchFAQ,
  }, dispatch)
);

export default connect(mstp, mdtp)(adminFAQ);
