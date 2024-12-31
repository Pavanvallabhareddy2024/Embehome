import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";

function About() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);


  const [button1Data, setbutton1Data] = useState({
    deviceBarCodeNumber: "",
    modularType: "",
    color: "",
    boardType: "",
    batchNo: "",
    xbeeType: "",
    switchCount: "",
    glassType: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setbutton1Data((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", button1Data);
    setButton1(false); // Close popup after submission
  };

  const handleBack = () => {
    setButton1(false); // Close popup on back
  };

  return (
    <div className='d-flex flex-column' style={{ height: "100vh", width: "100vw", padding: "10px", paddingTop: "100px", backgroundColor:"#108b8b"}}>
      <div className='d-flex flex-column'>
        <h1 style={{ color:"white",fontSize:"30px",marginBottom:"30px",marginLeft:"10px",fontFamily:"roboto",fontWeight:"bold"}}>Current Inventory Boards</h1>

        <div className='d-flex flex-row justify-content-center align-items-center gap-5' style={{ borderRadius: "8px", height: "180px", width: "100%", boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", padding: "20px" }}>

          {/*12M 100 60 40*/} 
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>12M</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*8M 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>8M</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*4M 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>4M</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*2M 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>2M</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*CCM 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>CCM</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*Bell 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>Bell</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/*Hub 100 60 40*/}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "yellow", margin: 0 }}>Hub</h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>100</h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>60</h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px"
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>40</h1>
            </div>
          </div>

          {/* Remotes 100 60 40 */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-center position-relative"
            style={{
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              height: "130px",
              width: "130px",
              backgroundColor: "white",
              padding: "5px",
              gap: "5px",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden" // Ensures Division 1 can be absolutely positioned
            }}
          >
            {/* Division 1 */}
            <div
              className="d-flex justify-content-center align-items-center position-absolute"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "#ff6f69",
                borderRadius: "5px",
                top: "0", // Positions Division 1 at the top of the container
                left: "0", // Positions Division 1 at the left of the container
                margin: 0, // Ensures no margin affects positioning
              }}
            >
              <h1 style={{ fontSize: "11px", fontWeight: "bold", color: "yellow", margin: 0 }}>
                Remotes
              </h1>
            </div>

            {/* Division 2 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "45px",
                width: "50px",
                borderRadius: "5px",
                marginLeft: "50px", // Positions Division 2 at the right of Division 1
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "green", margin: 0 }}>
                100
              </h1>
            </div>

            {/* Division 3 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px",
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>
                60
              </h1>
            </div>

            {/* Division 4 */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px",
              }}
            >
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", margin: 0 }}>
                40
              </h1>
            </div>
          </div>


        </div>

        <div
          className="d-flex flex-row justify-content-around align-items-center"
          style={{
            width: "100%",
            height: "60px",
            backgroundColor: "transparent",
            marginTop: "40px",
            padding: "10px",
          }}
        >
          {/* Button 1 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#cc1b18",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#a61b19"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#cc1b18"}
            onClick={() => setButton1(true)}
          >
            Add Board to Inventory
          </button>
          
          {/* Popup */}
          {button1 && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "500px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}
              >
                <h2 style={{ color:"#0e94b3", textAlign: "center", marginBottom: "20px" }}>Add Board to Inventory</h2>

                {/* Form Fields */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px"
                  }}
                >
                  {/* Device Bar Code Number */}
                  <div>
                    <label>Device Bar Code Number</label>
                    <input
                      type="text"
                      name="deviceBarCodeNumber"
                      value={button1Data.deviceBarCodeNumber}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    />
                  </div>

                  {/* Modular Type */}
                  <div>
                    <label>Modular Type</label>
                    <select
                      name="modularType"
                      value={button1Data.modularType}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Type1">Type1</option>
                      <option value="Type2">Type2</option>
                    </select>
                  </div>

                  {/* Color */}
                  <div>
                    <label>Color</label>
                    <select
                      name="color"
                      value={button1Data.color}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                    </select>
                  </div>

                  {/* Board Type */}
                  <div>
                    <label>Board Type</label>
                    <select
                      name="boardType"
                      value={button1Data.boardType}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="TypeA">TypeA</option>
                      <option value="TypeB">TypeB</option>
                    </select>
                  </div>

                  {/* Batch No */}
                  <div>
                    <label>Batch No</label>
                    <input
                      type="text"
                      name="batchNo"
                      value={button1Data.batchNo}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    />
                  </div>

                  {/* Xbee Type */}
                  <div>
                    <label>Xbee Type</label>
                    <select
                      name="xbeeType"
                      value={button1Data.xbeeType}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Xbee1">Xbee1</option>
                      <option value="Xbee2">Xbee2</option>
                    </select>
                  </div>

                  {/* Switch Count */}
                  <div>
                    <label>Switch Count</label>
                    <select
                      name="switchCount"
                      value={button1Data.switchCount}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  {/* Glass Type */}
                  <div>
                    <label>Glass Type</label>
                    <select
                      name="glassType"
                      value={button1Data.glassType}
                      onChange={handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Glass1">Glass1</option>
                      <option value="Glass2">Glass2</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <button
                    onClick={handleBack}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "orange",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight:"bold",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#28a745",
                      border: "none",
                      borderRadius: "5px",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Button 2 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#cc1b18",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#a61b19"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#cc1b18"}
          >
            Add HUB to Inventory
          </button>

          {/* Button 3 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#cc1b18",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#a61b19"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#cc1b18"}
          >
            Add Remote to Inventory
          </button>

          {/* Button 4 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#cc1b18",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#a61b19"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#cc1b18"}
          >
            Add other items to Inventory
          </button>

        </div>


      </div>
    </div>
  )
}

export default About