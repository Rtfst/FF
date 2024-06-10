import { useState } from "react";
import "./componentStyle.css";
function Modal() {
  const [obj, setobj] = useState({
    name: "",
    age: "",
    employ: false,
    salary: 0,
  });

  return (
    <div className="component">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            obj.age > 18 &&
            obj.name !== "" &&
            obj.employ == true &&
            obj.salary !== 0
          ) {
            alert("you are sucess");
          } else {
            alert("you aren't sucess");
          }
        }}
      >
        <label>full name</label>
        <input
          type="text"
          value={obj.name}
          placeholder="please enter your name"
          onChange={(e) => {
            setobj({ ...obj, name: e.target.value });
          }}
        />
        <br />
        <label>age</label>
        <input
          type="number"
          value={obj.age}
          placeholder="please enter your age"
          onChange={(e) => {
            setobj({ ...obj, age: e.target.value });
          }}
        />
        <br />
        <label>are you an employed : </label>
        <input
          type="checkbox"
          checked={obj.employ}
          onChange={(e) => {
            setobj({ ...obj, employ: e.target.checked });
          }}
        />
        <br />
        <select
          value={obj.salary}
          onChange={(e) => {
            setobj({ ...obj, salary: e.target.value });
          }}
        >
          <option>salary is : 5000$</option>
          <option>salary is : 3000$</option>
          <option>salary is : 2000$</option>
        </select>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
export default Modal;
