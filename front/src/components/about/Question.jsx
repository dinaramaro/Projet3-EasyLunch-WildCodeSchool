import React, { Component } from 'react';
import {
  Collapse, Button, CardBody, Card, Container, Row, Col,
} from 'reactstrap';
import './Question.scss';

class Question extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  toggle() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  render() {
    const { question, reponse } = this.props;
    const { collapse } = this.state;
    return (
      <Container className="Question">
        <Row>
          <Col xs="12">
            <Button onClick={this.toggle} className="button-faq">{question}</Button>
            <Collapse isOpen={collapse}>
              <Card className="mb-3">
                <CardBody className="reponse">
                  {reponse}
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
