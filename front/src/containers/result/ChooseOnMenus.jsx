import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Label,
  CustomInput,
} from 'reactstrap';
import './ChooseOnMenus.scss';
import { handleChooseOnMenus } from '../../actions';

const ChooseOnMenus = ({
  handleChooseOnMenus, text, meals, idUser, chooseByUser: { tabs },
}) => {
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
        tabs.length === 0
          ? meals.map(item => (
            <div className="radio" key={`${item.id_plat}${item.meals_name}`}>
              <CustomInput
                type="radio"
                value={item.meals_name}
                name={text}
                id={`${item.id_plat}${item.id}`}
                label={item.meals_name}
                onChange={(e) => {
                  handleChooseOnMenus(
                    e.target.name,
                    e.target.value,
                    item.id,
                    item.menu_name,
                    item.menu_price,
                    text,
                    item.id_plat,
                    item.meals_price,
                    item.plat,
                    item.nbmeals,
                    idUser,
                  );
                }}
              />
            </div>
          ))
          : meals.map((item) => {
            const resultFind = tabs.find(it => ((it.idmeal === item.id_plat) && (it.menuname === item.menu_name)));
            if (resultFind === undefined) {
              return (
                <div className="radio" key={`${item.id_plat}${item.meals_name}`}>
                  <CustomInput
                    type="radio"
                    value={item.meals_name}
                    name={text}
                    id={`${item.id_plat}${item.id}`}
                    label={item.meals_name}
                    onChange={(e) => {
                      handleChooseOnMenus(
                        e.target.name,
                        e.target.value,
                        item.id,
                        item.menu_name,
                        item.menu_price,
                        text,
                        item.id_plat,
                        item.meals_price,
                        item.plat,
                        item.nbmeals,
                        idUser,
                      );
                    }}
                  />
                </div>
              );
            }
            return (
              <div className="radio" key={`${item.id_plat}${item.meals_name}`}>
                <CustomInput
                  type="radio"
                  checked
                  value={item.meals_name}
                  name={text}
                  id={`${item.id_plat}${item.id}`}
                  label={item.meals_name}
                  onChange={(e) => {
                    handleChooseOnMenus(
                      e.target.name,
                      e.target.value,
                      item.id,
                      item.menu_name,
                      item.menu_price,
                      text,
                      item.id_plat,
                      item.meals_price,
                      item.plat,
                      item.nbmeals,
                      idUser,
                    );
                  }}
                />
              </div>
            );
          })
      }
    </div>
  );
};

function mstp(state) {
  return {
    idUser: state.log.user.id,
    chooseByUser: state.chooseByUser,
  };
}


function mdtp(dispatch) {
  return bindActionCreators({ handleChooseOnMenus }, dispatch);
}

export default connect(mstp, mdtp)(ChooseOnMenus);
