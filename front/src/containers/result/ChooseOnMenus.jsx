import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Label,
  CustomInput,
} from 'reactstrap';
import './ChooseOnMenus.scss';
import { handleChooseOnMenus } from '../../actions';

const ChooseOnMenus = (props) => {
  const { handleChooseOnMenus, text, meals } = props;
  console.log(meals);
  return (
    <div className="ChooseOnMenus">
      {
        meals.length > 0
          ? (
            <div>
              <Label for={text}>{`${text} : `}</Label>
            </div>)
          : ''
      }
      {
        meals.map(item => (
          <div className="radio" key={`${item.id_plat}${item.meals_name}`}>
            <CustomInput
              type="radio"
              value={item.meals_name}
              name={text}
              id={`${item.id_plat}${item.id}`}
              label={item.meals_name}
              onChange={(e) => {
                handleChooseOnMenus(e, item.id, item.menu_name, item.menu_price, text, item.id_plat, item.meals_price, item.plat, item.nbmeals);
              }}
            />
          </div>
        ))
      }
    </div>
  );
};

function mdtp(dispatch) {
  return bindActionCreators({ handleChooseOnMenus }, dispatch);
}

export default connect(null, mdtp)(ChooseOnMenus);
