import React, { Component } from 'react';
import './CGV.scss';
import { Container } from 'reactstrap';
import { varServeur } from '../../constants';

class CGV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cgv: [],
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/cgv`)
      .then(results => results.json())
      .then((cgv) => {
        this.setState({ cgv });
      });
  }

  render() {
    const { cgv } = this.state;
    return (
      <div className="CGV">
        <h1 className="title">Conditions générales de Service</h1>
        <Container>
          <div className="ql-editor" dangerouslySetInnerHTML={{ __html: cgv }} />
        </Container>
      </div>
    );
  }
}

export default CGV;
