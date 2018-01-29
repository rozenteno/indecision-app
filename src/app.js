var user = {
   //name: 'Rodrigo',
   age: 19,
   location: 'Aguascalientes'
};

function getLocation(location){
   if(location != ''){
      return location;
   }
}

var template = (
   <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      <p>Location: {getLocation(user.location)}</p>
   </div>
);

var app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computer',
   options : ['One', 'Two']
};

var templateTwo = (
   <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <ol>
         <li>Item One</li>
         <li>Item Two</li>
      </ol>
   </div>
);

ReactDOM.render(templateTwo, document.querySelector('#app'));