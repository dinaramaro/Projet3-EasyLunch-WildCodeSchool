import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GeneralInformations from './GeneralInformations';
import RestoInfos from './RestoInfos';

const OrderSummary = (props) => {
  const { menuResto: { resto: { restoInfos } } } = props;
  const { chooseByUser: { tabs } } = props;
  const { sendOrder: { sendOrder: { tableCommand } } } = props;
  const { sendOrder } = props;
  if (tabs.length === 0) {
    return (
      <div>
        <Link to="/"><Button>VEUILLEZ CHOISIR VOTRE MENU</Button></Link>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <RestoInfos />
          <GeneralInformations />
          <h2>Récapitulatif de votre commande</h2>
          <ul>
            {tabs.map((item) => {
              if (item.Plat !== undefined) {
                return (
                  <li>{item.Plat}</li>
                );
              } if (item.Dessert !== undefined) {
                return (
                  <li>{item.Dessert}</li>
                );
              } if (item.Boisson !== undefined) {
                return (
                  <li>{item.Boisson}</li>
                );
              }
              return (
                <li>{item.Entrée}</li>
              );
            })
            }
          </ul>
          <p>{tableCommand.special !== undefined ? `Instructions spéciales : ${tableCommand.special}` : 'Instructions spéciales : rien à signaler'}</p>
          <p>{`Prix total de votre commande : ${sendOrder.total}  €`}</p>
        </Col>
        <Col sm={4}>
          <p>
            {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
          </p>
          <p>Invite tes collègues à te rejoindre en utilisant le code de partage.</p>
          <p>Code de partage : (code de partage)</p>
        </Col>
      </Row>

    </Container>
  );
};

function mstp(state) {
  return {
    menuResto: state.menuResto,
    sendOrder: state.sendOrder,
    chooseByUser: state.chooseByUser,
  };
}

export default connect(mstp)(OrderSummary);
