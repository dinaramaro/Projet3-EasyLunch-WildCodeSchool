import React from 'react';
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';

const Questions = (props) => {
  const { toggle, collapse, questions } = props;
  return (
    <div>
      {questions.map(item => (
        <div>
          <Button color="primary" onClick={() => { toggle(item); }} style={{ marginBottom: '1rem' }}>{item.question}</Button>
          <Collapse isOpen={collapse}>
            <Card>
              <CardBody>
                {item.reponse}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Questions;
