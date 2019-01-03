import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { varServeur } from '../../../constants';
import './AdminFAQ.scss';
import AdminMenu from '../AdminMenu';


class AdminFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listfaq: [],
      modal: false,
      currentIndex: 0,
    };
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/faq`)
      .then(response => response.json())
      .then(data => this.setState({ listfaq: data }));
  }

  deleteQuestion = (id) => {
    fetch(`${varServeur}admin/faq/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    });
  }

  toggle(id) {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      currentIndex: id,
    });
  }

  render() {
    const { listfaq, modal, currentIndex } = this.state;
    return (
      <div className="AdminFAQ">
        <AdminMenu />
        <h1 className="title">FAQ</h1>
        <Container>
          <Row className="button">
            <Link to="/admin/admin-faq/question"><Button className="mb-3">Ajouter une question</Button></Link>
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
                    <Link to={`/admin/admin-faq/question/${item.id}`}><Button>Modifier</Button></Link>
                  </td>
                  <td>
                    <Button onClick={() => this.toggle(item.id)}>Supprimer</Button>
                  </td>
                </tr>
              ))}
            </table>
            <Modal isOpen={modal}>
              <ModalBody>
                {'Êtes-vous sur de vouloir supprimer la question?'}
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => this.deleteQuestion(currentIndex)}>Supprimer</Button>
                <Button onClick={() => this.toggle()}>Annuler</Button>
              </ModalFooter>

            </Modal>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminFAQ;
