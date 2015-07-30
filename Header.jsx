
//var React = require('react')
var React = require('react'); 
var React_router = require('react-router');
//import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';



var Header = React.createClass({
  render: function () {
    return (
    	<div className="nav">
        <a href='./'>Home</a>
        <a href='./create'>Create News</a>
    
        
        <RouteHandler/>
      </div>
         
    )
  }
});

let routes = (  
  <Route name="index" path="/" handler={index}>
    <Route name="create" path="/create" handler={create}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});




