import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Label,
  CustomInput,
} from 'reactstrap';
import { handleChoose } from '../../actions';

const ChooseMeals = (props) => {
  const { handleChoose, text, meals } = props;
  return (
    <div>
      {
        meals.length > 0
          ? <Label for={text}>{text}</Label>
          : ''
      }
      {
        meals.map(item => (
          <div key={item.meals_name}>
            <CustomInput type="checkbox" value={item.meals_name} name={text} id={item.meals_name} label={item.meals_name} onChange={e => handleChoose(e, item.meals_price)} />
          </div>
        ))
      }
    </div>
  );
};

function mdtp(dispatch) {
  return bindActionCreators({ handleChoose }, dispatch);
}

export default connect(mdtp)(ChooseMeals);
