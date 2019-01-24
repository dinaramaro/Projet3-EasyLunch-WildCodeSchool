import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './Team.scss';
import { varServeur } from '../../../constants';
import CardTeam from './CardTeam';


class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/team`)
      .then(results => results.json())
      .then((data) => {
        this.setState({ team: data });
      });
  }

  render() {
    const { team } = this.state;
    return (
      <div className="Team">
        <h1>NOTRE EQUIPE</h1>
        <Container>
          <Row>
            {
            team.map(mate => (
              <Col className="person" lg="6">
                <CardTeam
                  mate={mate}
                />
              </Col>
            ))
          }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Equipe;
