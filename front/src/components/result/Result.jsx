import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dataResults } from '../../actions/search';
import { varServeur } from '../../constants';

class Result extends Component {
  componentDidMount() {
    const { location: { search }, dataResults } = this.props;
    const searchWord = search.replace('?keyword=', '');

    dataResults(`${varServeur}search/${searchWord}`);
  }

  render() {
    return (
      <div>
        coucou
      </div>
    );
  }
}

function mstp(state) {
  return {
    searchResults: state.searchResults,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ dataResults }, dispatch);
}

export default connect(mstp, mdtp)(Result);
