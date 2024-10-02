import './App.css';
import Title from "./Title.js";
import Button from './Button.js';
import FormPersonalInfo from './FormPersonalInfo.js';
import FormOrders from './FormOrders.js';
import FormOverview from './FormOverview.js';


function App() {
  return (
    <div className="theFirstDiv">   
      <Title />
      <p>跳至 ，共 張</p>
      <div className="button">
        <Button text="Log this form" color="Blue"/>
        <Button text="Log all forms" color="Teal"/>
        <Button text="Delete this form" color="Red"/>
      </div> 
      <div className="navBar">
      </div>
      <FormPersonalInfo/>
      <FormOrders/>
      <FormOverview/>
      <p/>



    </div>
  );
}

export default App;
