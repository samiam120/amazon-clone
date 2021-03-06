import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"/>
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello </span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Return </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <div className="header__optionBasket">
        <ShoppingCartIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>

      </div>
  





    </div>
  );
}

export default Header;
