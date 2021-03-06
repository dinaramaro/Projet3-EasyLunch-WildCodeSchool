import React, { Component } from 'react';
import {
  Col, Row, Container,
} from 'reactstrap';
import { varServeur } from '../../../constants';
import CardPartner from './CardPartner';


class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/partners`)
      .then(results => results.json())
      .then((data) => {
        this.setState({ partners: data });
      });
  }

  render() {
    const { partners } = this.state;
    return (
      <div className="Partners">
        <h1 className="title">NOS PARTENAIRES</h1>
        <Container>
          <Row>
            {
            partners.map(partner => (
              <Col key={partner.id} lg="4" md="6" sm="6" xs="12">
                <CardPartner partner={partner} />
              </Col>
            ))
          }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Partners;
