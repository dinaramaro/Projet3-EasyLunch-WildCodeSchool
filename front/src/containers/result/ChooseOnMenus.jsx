import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Label,
  CustomInput,
} from 'reactstrap';
import './ChooseOnMenus.scss';
import { handleChoose } from '../../actions';

const ChooseOnMenus = (props) => {
  const { handleChoose, text, meals } = props;
  return (
    <div className="ChooseOnMenus">
      {
        meals.length > 0
          ? (
            <div>
              <p>{meals[0].menu_name}</p>
              <Label for={text}>{text}</Label>
            </div>)
          : ''
      }
      {
        meals.map(item => (
          <div className="checkbox" key={`${item.id_plat}${item.meals_name}`}>
            <CustomInput
              type="checkbox"
              value={item.meals_name}
              name={text}
              id={item.id}
              label={`${item.meals_name} ${item.menu_price} ${'€'}`}
              onChange={(e) => {
                handleChoose(e, item.menu_price, text, item.id);
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

export default connect(null, mdtp)(ChooseOnMenus);
