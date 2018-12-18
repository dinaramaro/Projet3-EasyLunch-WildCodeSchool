import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { varServeur } from '../../constants';


class Politic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      politic: [],
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/politic`)
      .then(results => results.json())
      .then((politic) => {
        this.setState({ politic });
      });
  }

  render() {
    const { politic } = this.state;
    return (
      <div className="Politic">
        <h1 className="title">Politique de confidentialité</h1>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: politic }} />
        </Container>
      </div>
    );
  }
}

export default Politic;
