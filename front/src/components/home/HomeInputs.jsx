import React, { Component } from 'react';
import './HomeInputs.scss';
import { Input, Button, Form } from 'reactstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const imgSrc = 'medias/hero-image.png';

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
        <Form onSubmit={() => this.pageResult()}>
          <div
            className="background"
            style={{ backgroundImage: `url(${imgSrc})`, height: '90vh' }}
          >
            <div className="fog" />
            <h2 className="border-text banner-text">
              Commandez et payez avant
            </h2>
            <h2 className="just-margin border-text banner-text">
              et soyez servis dès votre arrivée au restaurant
            </h2>

            <Input
              className="search1"
              placeholder="Restaurant, ville, adresse ou type de restaurant"
              style={{ width: '25vw' }}
              value={keyword}
              onChange={this.onChange}
              name="keyword"
            />
            <Input
              className="search2"
              type="select"
              placeholder="Nombre de personnes"
              style={{ width: '25vw' }}
              name="personcapacity"
              value={personcapacity}
              onChange={this.onChange}
            >
              <option>Pour combien ?</option>
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
              <option>12+</option>
            </Input>
            <Button className="search-button btn-submit">Rechercher</Button>
            <Button tag={Link} to="/participation" className="participe-button">Je participe</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(HomeInputs);
