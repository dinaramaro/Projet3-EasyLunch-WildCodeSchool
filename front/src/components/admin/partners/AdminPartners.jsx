import React, { Component } from 'react';
import './AdminPartners.scss';
import {
  Container,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import FormPartners from './FormPartners';
import { varServeur } from '../../../constants';


class AdminPartners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPartners: [],
      modal: false,
      currentIndex: 0,
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/partners`)
      .then(results => results.json())
      .then((data) => {
        this.setState({
          allPartners: data,
        });
      });
  }

  deletePartner = (id) => {
    fetch(`${varServeur}admin/partners/delete/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
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
    const { allPartners, modal, currentIndex } = this.state;
    const currentName = allPartners
      .filter(jeu => jeu.id === currentIndex)
      .map(jeu => jeu.name);
    let count = 0;
    return (
      <div className="AdminPartners">
        <h1 className="title">Partenaire</h1>
        <Container fluid>
          <Table bordered>
            <thead>
              <tr>
                <th>n°</th>
                <th>Nom</th>
                <th>Aperçu image</th>
                <th>lien</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {
                allPartners.map((partner) => {
                  count += 1;
                  return (
                    <tr key={partner.id}>
                      <td>{count}</td>
                      <td>{partner.name}</td>
                      <td>
                        <img width="200px" height="100px" className="img-fluid" src={partner.picture} alt="partner logo" />
                      </td>
                      <td>
                        <a href={partner.link} rel="noopener noreferrer" target="_blank">Lien</a>
                      </td>
                      <td className="trash-icon">
                        <button type="submit" onClick={() => this.toggle(partner.id)}>
                          <i className="fa fa-trash fa-2x" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <Modal isOpen={modal}>
            <ModalBody>
              {`Etes vous sur de vouloir supprimer le partenaire ${currentName}`}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.deletePartner(currentIndex)}>Confirmer</Button>
              <Button color="secondary" onClick={() => this.toggle(0)}>Annuler</Button>
            </ModalFooter>
          </Modal>
        </Container>
        <FormPartners />
      </div>
    );
  }
}

export default AdminPartners;
