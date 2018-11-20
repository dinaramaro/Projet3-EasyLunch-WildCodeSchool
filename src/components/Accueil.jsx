import React, { Component } from 'react';
import Explication from './Explication';
import { Container } from 'reactstrap';

class Accueil extends Component {
    render() {
        return (
            <Container fluid={true}>
                  <Explication />
            </Container>
          

        )
    }
}

export default Accueil;
