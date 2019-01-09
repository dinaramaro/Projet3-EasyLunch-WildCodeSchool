import React from 'react';
import { FormGroup } from 'reactstrap';
import DisplayTitleMenu from './DisplayTitleMenu';
import ChooseOnMenus from '../../containers/result/ChooseOnMenus';


const DisplayMenu = ({ menu }) => {
  const { meals } = menu;
  let tempListEnt = [];
  let tempListMain = [];
  let tempListDessert = [];
  tempListEnt = meals.filter(item => item.plat === 0);
  tempListMain = meals.filter(item => item.plat === 1);
  tempListDessert = meals.filter(item => item.plat === 2);

  return (
    <div>
      <DisplayTitleMenu ent={tempListEnt} main={tempListMain} dessert={tempListDessert} />
      <FormGroup>
        <ChooseOnMenus text="Entrée" meals={tempListEnt} />
      </FormGroup>
      <FormGroup>
        <ChooseOnMenus text="Plat" meals={tempListMain} />
      </FormGroup>
      <FormGroup>
        <ChooseOnMenus text="Dessert" meals={tempListDessert} />
      </FormGroup>
    </div>
  );
};

export default DisplayMenu;
