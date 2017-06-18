var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <p>Main.jsx Rendered</p>
      {props.children}
    </div>
  );
}

module.exports = Main;
