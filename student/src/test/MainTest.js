import React, { useEffect, useState, Fragment} from "react";
import Animal from "../data/animal.json";

function MainTest() {
  const [data, setData] = useState([]);

   useEffect(() => {
    setData(Animal);
   }, []);

  console.log('Animal', Animal);

  function addArray(text) {
    console.log(text);
    Animal.push(text);
    setData(Animal);
    console.log('Animal', Animal);
  }

  function deleteArray(text) {
    console.log(text);
    Animal.pop(text);
    console.log('Animal', Animal);
  }

  function filterArray(text) {
    console.log(text);
    let array = Animal.filter((a) => a !== text);
    console.log('Animal', array);
  }

  return (
    <Fragment>
    <div>
      <button
        type="button"
        onClick={() => {
          addArray("ม้า");
        }}
      >
        Click
      </button>
      <div className="row">
        {data.map((item, index) => (
          <div className="col">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
    </Fragment>
  );
}

export default MainTest;
