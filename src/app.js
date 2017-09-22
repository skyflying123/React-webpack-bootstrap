import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'

class App extends React.Component {
   render(){ // Every react component has a render method.
     return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
       <div className="box">
         sss
         <button id="something-btn" type="button" className="btn btn-success btn-sm">
		  Something
		</button>
       </div>
     );
   }
 }
 ReactDOM.render(<App />, document.getElementById('app'));