import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Label,
  CustomInput,
} from 'reactstrap';
import './ChooseOnCards.scss';
import { handleChoose } from '../../actions';

const ChooseOnCards = (props) => {
  const { handleChoose, text, meals } = props;
  return (
    <div className="ChooseOnCards">
      {
        meals.length > 0
          ? <Label for={text}>{text}</Label>
          : ''
      }
      {
        meals.map(item => (
          <div className="checkbox" key={`${item.id}${item.name}`}>
            <CustomInput
              type="checkbox"
              value={item.name}
              name="name"
              id={item.id}
              label={`${item.name} ${item.price} ${'€'}`}
              onChange={(e) => {
                handleChoose(e, item.price, text, item.id);
              }}
            />
          </div>
        ))
      }
    </div>
  );
};

function mdtp(dispatch) {
  return bindActionCreators({ handleChoose }, dispatch);
}

export default connect(null, mdtp)(ChooseOnCards);
