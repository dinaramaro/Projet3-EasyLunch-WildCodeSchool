import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CustomInput,
} from 'reactstrap';
import './ChooseOnCards.scss';
import { handleChooseOnCards } from '../../actions';

const ChooseOnCards = ({
  handleChooseOnCards, text, meals, idUser, chooseByUser: { tabs },
}) => {
  let tempPrice = '';
  return (
    <div className="ChooseOnCards">
      {
        tabs.length === 0
          ? meals.map((item) => {
            if ((text !== 'Entrée du jour') && (text !== 'Plat du jour') && (text !== 'Dessert du jour')) {
              tempPrice = `${item.price} €`;
            }
            return (
              <div className="checkbox" key={`${item.id}${item.name}`}>
                <CustomInput
                  type="checkbox"
                  label={`${item.name} ${tempPrice}`}
                  value={item.name}
                  name={text}
                  id={item.id}
                  onChange={(e) => {
                    handleChooseOnCards(
                      e.target.name,
                      e.target.value,
                      item.price,
                      text,
                      item.id,
                      item.plat,
                      idUser,
                    );
                  }}
                />
              </div>
            );
          })
          : meals.map((item) => {
            if ((text !== 'Entrée du jour') && (text !== 'Plat du jour') && (text !== 'Dessert du jour')) {
              tempPrice = `${item.price} €`;
            }
            const resultFind = tabs.find(it => it.id === item.id);
            if (resultFind === undefined) {
              return (
                <div className="checkbox" key={`${item.id}${item.name}`}>
                  <CustomInput
                    type="checkbox"
                    label={`${item.name} ${tempPrice}`}
                    value={item.name}
                    name={text}
                    id={item.id}
                    onChange={(e) => {
                      handleChooseOnCards(
                        e.target.name,
                        e.target.value,
                        item.price,
                        text,
                        item.id,
                        item.plat,
                        idUser,
                      );
                    }}
                  />
                </div>
              );
            }
            return (
              <div className="checkbox" key={`${item.id}${item.name}`}>
                <CustomInput
                  checked
                  type="checkbox"
                  label={`${item.name} ${tempPrice}`}
                  value={item.name}
                  name={text}
                  id={item.id}
                  onChange={(e) => {
                    handleChooseOnCards(
                      e.target.name,
                      e.target.value,
                      item.price,
                      text,
                      item.id,
                      item.plat,
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
  return bindActionCreators({ handleChooseOnCards }, dispatch);
}

export default connect(mstp, mdtp)(ChooseOnCards);
