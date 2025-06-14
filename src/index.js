import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal({isGoal}) {
  return(
    <>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  )
}

function Parrent(){
  return(
    <>
    <Goal isGoal={false}/>
    </>
  )
}


function AlertFunction() {

  const ALert1 = () => {
    alert("po po po");
  }

  return (
    <button onClick={ALert1}>click !</button>
  );
}



function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Audi' , 'Benz' , 'Pride'];
console.log(cars);
console.log(cars.length);


{/* <Garage cars={cars} /> */}



function Card({ children }) {
  return (
    <div className="card-green">
      {children}
    </div>
  );
}

function CardContainer(){
  return(
    <>
      <Card>
        <h4>عنوان ۱</h4>
        <p>متن ۱</p>
      </Card>

      <Card>
        <h4>عنوان ۲</h4>
        <p>متن ۲</p>
      </Card>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertFunction/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
