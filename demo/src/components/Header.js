import React from "react";
// mui
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
