// MyComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.scss'
import { CiWarning } from "react-icons/ci";

const baseURL = "http://localhost:3000/api/get";
function MyComponent() {
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data)
      response.data.map((e) => {
        if (e._id === "654de9edd47767a2a0b3c4cd") {
          setIsChecked(e.isMotorOn)
        }
      })


    });


  }, []);



  const handleUpdate = async () => {
    try {
      // Make a PUT request to the server API
      const response = await axios.put(`http://localhost:3000/runFunction2`, {});

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error updating boolean value:', error);
    }
    setData([{
      "_id": "654de9edd47767a2a0b3c4cd",
      "isMotorOn": false
    }])
  };


  const handleUpdate2 = async () => {
    try {
      // Make a PUT request to the server API
      const response = await axios.put(`http://localhost:3000/runFunction`, {});


      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error updating boolean value:', error);
    }
    setData([{
      "_id": "654de9edd47767a2a0b3c4cd",
      "isMotorOn": true
    }])

  };

  // const handleUpdate = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:3001/api/get`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ newValue }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to update boolean value');
  //     }

  //     // Handle the updated document if needed
  //     const updatedDocument = await response.json();
  //     console.log('Updated Document:', updatedDocument);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleCheckboxChange = () => {
    // Update the state when the checkbox is toggled
    if (isChecked === true) {
      setIsChecked(!isChecked);
      handleUpdate()
    } else if (isChecked === false) {
      setIsChecked(!isChecked);
      handleUpdate2()
    }
  };




  return (
    <div>

<div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={isChecked}
          id="checkbox"
          onChange={handleCheckboxChange}
        />
        <label className="checkbox__label" htmlFor="checkbox"></label>
      </div>


      {/* <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
      <button onClick={() => console.log(isChecked)}>ok</button>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      /> */}

      <h1>My Data</h1>
      <button onClick={() => console.log(data)}>Console</button>
      <button onClick={() => handleUpdate()}>MOTOR off</button>
      <button onClick={() => handleUpdate2()}>MOTOR on</button>



      <div>
        {data.map((element, index) => {
          if (element.isMotorOn === true) {
            return <h2 key={index}>Motor is Running<CiWarning />
            </h2>;
          }

          return <h2>Currently Motor is Off !!</h2>;
        })}</div>

      <div><label class="switch">
        <input type="checkbox" checked />
        <span class="slider"></span>
      </label></div>
    </div>
  );
}

export default MyComponent;
