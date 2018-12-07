import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import questions from '../../questionsList.json';
import Question from './Question';
import './FAQ.scss';

const FAQ = () => (
  <div className="FAQ">
    <h1 className="title">FAQ</h1>
    <Container>
      <Row>
        <Col>
          <p className="FAQ-text">
            {`Vous avez une question concernant EasyLunch ? Découvrez ici toutes les réponses concernant le concept EasyLunch, les avantages, comment réserver un restaurant... 
        Si toutefois vous ne trouviez pas réponse à votre question dans cette rubrique, n'hésitez pas à nous contacter par mail sur l'adresse contact@easy-lunch.fr`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          {questions.map(item => (
            <Question
              question={item.question}
              reponse={item.reponse}
              key={item.id}
            />
          ))}
        </Col>
      </Row>
    </Container>
  </div>
);

export default FAQ;
