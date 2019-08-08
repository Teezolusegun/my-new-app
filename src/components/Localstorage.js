import React, { Component } from "react";
import Header from "./Header";
import todoStyles from "../styles/localstorage.module.css";

class LocalStorage extends Component {
  render() {
    const person = {
      name: "Olusegun Emmanuel",
      age: "21"
    };
    const personToJson = JSON.stringify(person);
    //save to localstorage
    localStorage.setItem("newperson", personToJson);
    //retreive from ocalstorage
    const getPerson = localStorage.getItem("newperson");
    const personParse = JSON.parse(getPerson);
    return (
      <div className={todoStyles.info}>
        <Header title="Local Storage" />
        <h3 className={todoStyles.fo}>
          The stringified version is: <p>{getPerson}</p>
        </h3>
        <h4>
          The parsed version is
          <p>
            {" "}
            {personParse.name} and {personParse.age}
          </p>
        </h4>
      </div>
    );
  }
}
export default LocalStorage;
