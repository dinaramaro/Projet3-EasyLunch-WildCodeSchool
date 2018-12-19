import React, { Component } from 'react';
import { varServeur } from '../constants';

class RestaurantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restos: [],
    };
    this.fetchRestos = this.fetchRestos.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchRestos(match.params.id);
  }

  fetchRestos(id) {
    fetch(`${varServeur}page-restaurant/${id}`)
      .then(results => results.json())
      .then((data) => {
        this.setState({
          restos: data,
        });
      });
  }

  render() {
    const { restos: { menus } } = this.state;
    let restoMenus = [];
    if (menus !== undefined) {
      restoMenus = menus;
    }
    return (
      <div>
        {
          restoMenus.map(item => <p>{item.menu_name}</p>)
        }
      </div>
    );
  }
}

export default RestaurantPage;
