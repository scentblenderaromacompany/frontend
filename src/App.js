import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoadingBar from 'react-top-loading-bar';
import './App.css';

function App() {
const [progress, setProgress] = useState(0);

return (
 <Router>
   <div className="App">
     <LoadingBar color="#f0ad4e" progress={progress} onLoaderFinished={() => setProgress(0)} />
     <Switch>
       <Route path="/" component={() => <Home setProgress={setProgress} />} />
     </Switch>
   </div>
 </Router>
);
}

export default App;
