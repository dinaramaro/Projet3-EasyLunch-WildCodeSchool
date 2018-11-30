/*eslint-disable*/
import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFAQ } from '../../actions/adminFAQAction';


class adminFAQ extends Component {

  componentDidMount() {
    const { fetchFAQ } = this.props;
    fetchFAQ();
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
          <Col>
            <p className="FAQ-text">
              {questions.map(item =>  (
                <p>
               {item.question}
                </p>
                ))}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

const mstp = state => ({
  questions:state.fetchFAQ.questions,
  loading:state.fetchFAQ.loading,
  error:state.fetchFAQ.error,
});

const mdtp = dispatch => (
  bindActionCreators({
    fetchFAQ,
  }, dispatch)
);

export default connect(mstp, mdtp)(adminFAQ);
