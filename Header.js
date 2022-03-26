import classes from"./Header.module.css";
import React,{Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>J and K Restaurant</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table food with delecious foods'/>
      </div>
    </Fragment>
  );
};

export default Header;
