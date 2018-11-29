import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const FormAdmin = () => (
  <Container>
    <Form>
      <FormGroup>
        <Label>CVG</Label>
        <br />
        <Input
          type="textarea"
          name="text"
          placeholder="Conditions Générales"
        />
      </FormGroup>
      <Button>
        ENVOYER
      </Button>
    </Form>
  </Container>
);

export default FormAdmin;
