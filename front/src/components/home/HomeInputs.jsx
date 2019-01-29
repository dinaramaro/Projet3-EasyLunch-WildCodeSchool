import React, { Component } from 'react';
import './HomeInputs.scss';
import { Input, Button, Form } from 'reactstrap';
import { withRouter } from 'react-router';
import queryString from 'query-string';

class HomeInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      personcapacity: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  pageResult() {
    const { history } = this.props;
    const query = queryString.stringify(this.state);
    history.push(`/result?${query}`);
  }

  render() {
    const { keyword, personcapacity } = this.state;
    return (
      <div className="HomeInputs">
        <div className="fog" />
        <div className="message-home">
        Commandez et soyez servis
          <br />
        Dès votre arrivée !
        </div>
        <Form className="form-inputs" onSubmit={() => this.pageResult()}>
          <div className="search-inputs">
            <Input
              className="search input-shadow"
              placeholder="Restaurant, adresse"
              value={keyword}
              onChange={this.onChange}
              name="keyword"
              
            />
            <Input
              className="search input-shadow"
              type="select"
              name="personcapacity"
              value={personcapacity}
              onChange={this.onChange}
            >
              <option>Nombre de personnes</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Input>
          </div>
          <div className="search-button">
            <Button type="submit" className="all-btn">Rechercher</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(HomeInputs);
