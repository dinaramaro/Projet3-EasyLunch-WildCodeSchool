import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { fetchFAQ } from '../../actions/adminFAQAction';


class adminFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listfaq: [],
    };
  }

  componentDidMount() {
    window.scroll();
    fetch('http://localhost:4000/api/about/faq')
      .then(response => response.json())
      .then(data => this.setState({ listfaq: data }));
  }

  render() {
    const { listfaq } = this.state;
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
            {listfaq.map(item => (
              <tr>
                <td>
                  {item.question}
                </td>
                <td>
                  <Link to={`/admin/adminfaq/question/${item.id}`}><Button>Modifier</Button></Link>
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

export default adminFAQ;
