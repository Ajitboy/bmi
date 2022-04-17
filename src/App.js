import React, { useState } from "react";
// import Stack from "stack";
import "./styles.css";

function App() {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("plz enter a value");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.6) {
        setMessage("Your Underweight");
        console.log("first condt");
      } else if (bmi >= 18.6 && bmi < 24.9) {
        console.log("2nd condt");
        setMessage("You are a Healthy weight");
      } else if (bmi >= 25.0 && bmi < 29.9) {
        console.log("3rd condt");
        setMessage("You are Over Weight");
      } else if (bmi >= 30.0 && bmi < 34.9) {
        console.log("4th condt");
        setMessage("You are in Class 1 Obesity");
      } else if (bmi >= 35.0 && bmi < 39.9) {
        console.log("5th condt");
        setMessage("You are in Class 2 Obesity");
      } else {
        console.log("6th condt");
        setMessage("You are Extreme Obesity");
      }
    }
  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.6) {
      imgSrc = require("./assets/1underweight.png");
    } else if (bmi >= 18.6 && bmi < 24.9) {
      imgSrc = require("./assets/2healthy.png");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      imgSrc = require("./assets/3overweight.png");
    } else if (bmi >= 30.0 && bmi < 34.9) {
      imgSrc = require("./assets/4class1obesity.png");
    } else if (bmi >= 35.0 && bmi < 39.9) {
      imgSrc = require("./assets/5class2obesity.png");
    } else {
      imgSrc = require("./assets/6extremeobesity.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center"> BMI CALCULATOR </h2>{" "}
        <form onSubmit={calcBmi}>
          <p class="labelish">Gender :</p>
          <div id="ageContainer" name="Gender" class="genderOptions">
            <div id="male" class="floatBlock">
              <label for="male">
                {" "}
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  value="male"
                /> Male{" "}
              </label>
            </div>

            <div id="female" class="floatBlock">
              <label for="female">
                {" "}
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  value="female"
                />{" "}
                Female{" "}
              </label>
            </div>

            <div id="others" class="floatBlock">
              <label for="others">
                {" "}
                <input id="others" name="gender" type="radio" /> Others{" "}
              </label>
            </div>
          </div>
          <div>
            <label>Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Weight(Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(meter)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              {" "}
              Submit{" "}
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              {" "}
              Reload{" "}
            </button>
          </div>
        </form>
        <div className="center">
          <h3> Your BMI IS: {bmi}</h3>
          <p> {message} </p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
export default App;
