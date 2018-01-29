'use strict';

var user = {
   //name: 'Rodrigo',
   age: 19,
   location: 'Aguascalientes'
};

function getLocation(location) {
   if (location != '') {
      return location;
   }
}

var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      user.name ? user.name : 'Anonymous'
   ),
   user.age && user.age >= 18 && React.createElement(
      'p',
      null,
      'Age: ',
      user.age
   ),
   React.createElement(
      'p',
      null,
      'Location: ',
      getLocation(user.location)
   )
);

var app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computer',
   options: ['One', 'Two']
};

var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      app.title
   ),
   app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
   ),
   React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No Options'
   ),
   React.createElement(
      'ol',
      null,
      React.createElement(
         'li',
         null,
         'Item One'
      ),
      React.createElement(
         'li',
         null,
         'Item Two'
      )
   )
);

ReactDOM.render(templateTwo, document.querySelector('#app'));
