import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';
// import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = () => (
  <AppBar title="My App">
  <Tabs>
    <Tab label="Item 1" />
    <Tab label="Item 2" />
    <Tab label="Item 3" />
    <Tab label="Item 4" />
  </Tabs>
</AppBar>
);

export default Navbar;

