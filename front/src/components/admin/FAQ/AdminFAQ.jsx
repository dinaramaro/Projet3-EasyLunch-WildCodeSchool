import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { fetchFAQ } from '../../actions/adminFAQAction';
import './AdminFAQ.scss';


class adminFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listfaq: [],
    };
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    window.scroll();
    fetch('http://localhost:4000/api/admin/faq')
      .then(response => response.json())
      .then(data => this.setState({ listfaq: data }));
  }

  deleteQuestion = (id) => {
    fetch(`http://localhost:4000/api/admin/faq/${id}`, {
      method: 'DELETE',
    }).then(res => res.text())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('La question a bien été supprimée');
          window.location.reload();
        }
      }).catch((e) => {
        console.error(e);
        alert('Erreur lors de la suppression de la question');
      });
  }

  render() {
    const { listfaq } = this.state;
    return (
      <Container className="AdminFAQ">
        <Row>
          <Col>
            <h1 className="title">FAQ</h1>
          </Col>
        </Row>
        <Row className="bouton">
          <Link to="/admin/adminfaq/question"><Button className="mb-3">Ajouter une question</Button></Link>
        </Row>
        <Row className="table">
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
                  <Button onClick={() => { if (window.confirm('Souhaitez-vous supprimer la question?')) { this.deleteQuestion(item.id); } }}>Supprimer</Button>
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
