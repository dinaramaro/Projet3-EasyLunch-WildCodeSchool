import React, { Component } from 'react';
import './HomeInputs.scss';
import { Input, Button } from 'reactstrap';
import { withRouter } from 'react-router';

const imgSrc = 'medias/hero-image.png';


class HomeInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      personCapacity: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  pageResult() {
    const { keyword } = this.state;
    const { history } = this.props;
    history.push(`/resultat?keyword=${keyword}`);
  }

  render() {
    const { keyword, personCapacity } = this.state;
    return (
      <div className="HomeInputs">
        <div
          className="background"
          style={{ backgroundImage: `url(${imgSrc})`, height: '34vw' }}
        >
          <h2 className="border-text banner-text">
            Commandez et payez avant et soyez servis dès votre arrivée au restaurant
          </h2>
          <Input
            className="search1"
            placeholder="Restaurant"
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
            name="personCapacity"
            value={personCapacity}
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
          </Input>
          <Button onClick={() => this.pageResult(keyword)} className="search-button btn-submit">Rechercher</Button>
          <Button className="participe-button">Je participe</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeInputs);
