import React, { Component } from 'react';
import './AdminPartners.scss';
import {
  Container,
  Table,
} from 'reactstrap';
import FormPartners from './FormPartners';
import { varServeur } from '../../../constants';


class AdminPartners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPartners: [],
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
    fetch(`${varServeur}admin/deletepartner/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        window.location.reload();
      }
    });
  }

  render() {
    const { allPartners } = this.state;
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
                        <img width="200px" height="100px" src={partner.picture} alt="partner logo" />
                      </td>
                      <td>
                        <a href={partner.link}>{partner.link}</a>
                      </td>
                      <td className="trash-icon">
                        <button type="submit" onClick={() => this.deletePartner(partner.id)}>
                          <i className="fa fa-trash fa-2x" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Container>
        <FormPartners />
      </div>
    );
  }
}

export default AdminPartners;
