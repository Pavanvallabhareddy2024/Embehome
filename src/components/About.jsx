import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from "react";
import "./About.css";

function About() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  /*Button1 Starts*/
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

  const Button1handleInputChange = (e) => {
    const { name, value } = e.target;
    setbutton1Data((prevData) => ({ ...prevData, [name]: value }));
  };

  const Button1handleSubmit = () => {
    console.log("Form Data for Button 1:", button1Data);
    setButton1(false); // Close popup after submission
    setbutton1Data({});
  };

  const Button1handleBack = () => {
    setButton1(false); // Close popup on back
    setbutton1Data({});
  };
/*Button1 ends*/

  /*Button2 Starts*/
  const [button2Data, setbutton2Data] = useState({
    deviceBarCodeNumber: "",
    batchNo: "",
    xbeeType: "",
    hardwareversion: "",
    firmwareVersion: ""
  });

  const Button2handleInputChange = (e) => {
    const { name, value } = e.target;
    setbutton2Data((prevData) => ({ ...prevData, [name]: value }));
  };

  const Button2handleSubmit = () => {
    console.log("Form Data for Button 2:", button2Data);
    setButton2(false); // Close popup after submission
    setbutton2Data({});
  };

  const Button2handleBack = () => {
    setButton2(false); // Close popup on back
    setbutton2Data({});
  };
  /*Button2 ends*/

  /*Button3 Starts*/
  const [button3Data, setbutton3Data] = useState({
    
    batchNo: "",
    remotecount: "",
    remotetype: "",
    modeltype: ""
  });

  const Button3handleInputChange = (e) => {
    const { name, value } = e.target;
    setbutton3Data((prevData) => ({ ...prevData, [name]: value }));
  };

  const Button3handleSubmit = () => {
    console.log("Form Data for Button 3:", button3Data);
    setButton3(false); // Close popup after submission
    setbutton3Data({});
  };

  const Button3handleBack = () => {
    setButton3(false); // Close popup on back
    setbutton3Data({});
  };
  /*Button3 ends*/

  var Total12M = 100;
  var TT12M = 50;
  var SS12M = 50;

  var Total8M = 100;
  var TT8M = 50;
  var SS8M = 50;

  var Total4M = 100;
  var TT4M = 50;
  var SS4M = 50;

  var Total2M = 100;
  var TT2M = 50;
  var SS2M = 50;

  var TotalCCM = 100;
  var TTCCM = 60;
  var SSCCM = 40;

  var TotalBell = 100;
  var TTBell = 60;
  var SSBell = 40;

  var TotalHub = 100;
  var TTHub = 60;
  var SSHub = 40;

  var TotalRemotes = 100;
  var TTRemotes = 60;
  var SSRemotes = 40;

  const data = [
    {
      deviceBarCode: 'R1234567890123456789',
      modularType: '12 Module',
      color: 'White',
      boardType: 'TT',
      batchNo: '1/2/3.......',
      xbeeType: 'Nill',
      switchCount: '8S+1F',
      glassType: 'Full Plain',
    },
    {
      deviceBarCode: 'R1234567890123456789',
      modularType: '12 Module',
      color: 'White',
      boardType: 'SS',
      batchNo: '1/2/3.......',
      xbeeType: 'S3/S8/.....',
      switchCount: '8S+1F',
      glassType: 'Socket Enabled',
    },
    // Add more data items as needed
  ];

  // Search and filter state (optional, if needed for functionality)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term (optional)
  const filteredData = data.filter(item =>
    item.deviceBarCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.modularType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.boardType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  
  return (
    <div className='d-flex flex-column' style={{height: "auto", width: "100vw", padding: "10px", paddingTop: "100px", backgroundColor: "#f7f7f7" }}>
      <div className='d-flex flex-column'>
        <h1 style={{ color: "black", fontSize: "30px", marginBottom: "30px", marginLeft: "10px", fontFamily: "roboto", fontWeight: "bold" }}>Current Inventory Boards</h1>

        <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-5' style={{
          
          borderRadius: "8px", height: "auto", width: "100%", boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", padding: "20px"
        }}>

          {/* 12M */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            {/* First Inner Container (Flex Column) */}
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box ak"><h1>12M</h1></div>
              <div className="data-box"><h1>{Total12M}</h1></div>
            </div>

            {/* Second Inner Container (Flex Row) */}
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TT12M}</h1></div>
              <div className="small-box"><h1>{SS12M}</h1></div>
            </div>
          </div>

          {/* 8M */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>8M</h1></div>
              <div className="data-box"><h1>{Total8M}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TT8M}</h1></div>
              <div className="small-box"><h1>{SS8M}</h1></div>
            </div>
          </div>

          {/* 4M */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>4M</h1></div>
              <div className="data-box"><h1>{Total4M}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TT4M}</h1></div>
              <div className="small-box"><h1>{SS4M}</h1></div>
            </div>
          </div>

          {/* 2M */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>2M</h1></div>
              <div className="data-box"><h1>{Total2M}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TT2M}</h1></div>
              <div className="small-box"><h1>{SS2M}</h1></div>
            </div>
          </div>

          {/* CCM */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>CCM</h1></div>
              <div className="data-box"><h1>{TotalCCM}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TTCCM}</h1></div>
              <div className="small-box"><h1>{SSCCM}</h1></div>
            </div>
          </div>

          {/* Bell */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>Bell</h1></div>
              <div className="data-box"><h1>{TotalBell}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TTBell}</h1></div>
              <div className="small-box"><h1>{SSBell}</h1></div>
            </div>
          </div>

          {/* Hub */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box"><h1>Hub</h1></div>
              <div className="data-box"><h1>{TotalHub}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TTHub}</h1></div>
              <div className="small-box"><h1>{SSHub}</h1></div>
            </div>
          </div>

          {/* Remotes */}
          <div className="d-flex flex-column align-items-center justify-content-center inventory-box">
            <div className="d-flex flex-column justify-content-center align-items-center inner-container">
              <div className="label-box "><h1 style={{ fontSize: "14px" }}>Remotes</h1></div>
              <div className="data-box"><h1>{TotalRemotes}</h1></div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center row-container">
              <div className="small-box"><h1>{TTRemotes}</h1></div>
              <div className="small-box"><h1>{SSRemotes}</h1></div>
            </div>
          </div>

        </div>

        <div
          className="d-flex flex-wrap justify-content-around align-items-center"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "transparent",
            marginTop: "40px",
            padding: "10px",
            gap: "10px"
          }}
        >
          {/* Button 1 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#108b8b",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              flexGrow: "1",
              margin: "5px",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0d6666"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#108b8b"}
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
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Modular Type */}
                  <div>
                    <label>Modular Type</label>
                    <select
                      name="modularType"
                      value={button1Data.modularType}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="12M">12M</option>
                      <option value="8M">8M</option>
                      <option value="4M">4M</option>
                      <option value="2M">2M</option>
                      <option value="CC">CC</option>
                      <option value="Bell">Bell</option>
                    </select>
                  </div>

                  {/* Color */}
                  <div>
                    <label>Color</label>
                    <select
                      name="color"
                      value={button1Data.color}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="C.Brown">C.Brown</option>
                    </select>
                  </div>

                  {/* Board Type */}
                  <div>
                    <label>Board Type</label>
                    <select
                      name="boardType"
                      value={button1Data.boardType}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="TT">TT</option>
                      <option value="SS">SS</option>
                    </select>
                  </div>

                  {/* Batch No */}
                  <div>
                    <label>Batch No</label>
                    <input
                      type="text"
                      name="batchNo"
                      value={button1Data.batchNo}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Xbee Type */}
                  <div>
                    <label>Xbee Type</label>
                    <select
                      name="xbeeType"
                      value={button1Data.xbeeType}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="S3">S3</option>
                      <option value="S8">S8</option>
                    </select>
                  </div>

                  {/* Switch Count */}
                  <div>
                    <label>Switch Count</label>
                    <select
                      name="switchCount"
                      value={button1Data.switchCount}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="8S-1F">8S-1F</option>
                      <option value="5S-1F">5S-1F</option>
                    </select>
                  </div>

                  {/* Glass Type */}
                  <div>
                    <label>Glass Type</label>
                    <select
                      name="glassType"
                      value={button1Data.glassType}
                      onChange={Button1handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Full Plain">Full Plain</option>
                      <option value="Socket Enabled">Socket Enabled</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <button
                    onClick={Button1handleBack}
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
                    onClick={Button1handleSubmit}
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
              backgroundColor: "#108b8b",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              flexGrow: "1",
              margin: "5px",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0d6666"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#108b8b"}
            onClick={() => setButton2(true)}
          >
            Add HUB to Inventory
          </button>

          {/* Popup */}
          {button2 && (
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
                <h2 style={{ color: "#0e94b3", textAlign: "center", marginBottom: "20px" }}>
                  Add HUB to Inventory
                </h2>

                {/* Form Fields */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px"
                  }}
                >
                  {/* Device_BarCode_Number */}
                  <div>
                    <label>Device_BarCode_Number</label>
                    <input
                      type="text"
                      name="deviceBarCodeNumber"
                      value={button2Data.deviceBarCodeNumber}
                      onChange={Button2handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Batch No */}
                  <div>
                    <label>Batch No</label>
                    <input
                      type="text"
                      name="batchNo"
                      value={button2Data.batchNo}
                      onChange={Button2handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Xbee Type */}
                  <div>
                    <label>Xbee Type</label>
                    <select
                      name="xbeeType"
                      value={button2Data.xbeeType}
                      onChange={Button2handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="S3">S3</option>
                      <option value="S8">S8</option>
                    </select>
                  </div>

                  {/* Hardware Version */}
                  <div>
                    <label>Hardware Version</label>
                    <select
                      name="hardwareversion"
                      value={button2Data.hardwareversion}
                      onChange={Button2handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="HW1.0">HW1.0</option>
                      <option value="HW2.0">HW2.0</option>
                    </select>
                  </div>

                  {/* Firmware Version */}
                  <div>
                    <label>Firmware Version</label>
                    <select
                      name="firmwareVersion"
                      value={button2Data.firmwareVersion}
                      onChange={Button2handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="FW1.0">FW1.0</option>
                      <option value="FW2.0">FW2.0</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <button
                    onClick={Button2handleBack}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "orange",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={Button2handleSubmit}
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




          {/* Button 3 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#108b8b",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              flexGrow: "1",
              margin: "5px",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0d6666"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#108b8b"}
            onClick={() => setButton3(true)}
          >
            Add Remote to Inventory
          </button>

          {/* Popup for Button3 */}
          {button3 && (
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
                <h2 style={{ color: "#0e94b3", textAlign: "center", marginBottom: "20px" }}>
                  Add Remote Details
                </h2>

                {/* Form Fields */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px"
                  }}
                >
                  {/* Batch No */}
                  <div>
                    <label>Batch No</label>
                    <input
                      type="text"
                      name="batchNo"
                      value={button3Data.batchNo}
                      onChange={Button3handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Remote Count */}
                  <div>
                    <label>Remote Count</label>
                    <input
                      type="text"
                      name="remotecount"
                      value={button3Data.remotecount}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          Button3handleInputChange(e);
                        }
                      }}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                      placeholder="Enter numbers only"
                    />
                  </div>

                  {/* Remote Type */}
                  <div>
                    <label>Remote Type</label>
                    <select
                      name="remotetype"
                      value={button3Data.remotetype}
                      onChange={Button3handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="Type1">Type1</option>
                      <option value="Type2">Type2</option>
                    </select>
                  </div>

                  {/* Model Type */}
                  <div>
                    <label>Model Type</label>
                    <select
                      name="modeltype"
                      value={button3Data.modeltype}
                      onChange={Button3handleInputChange}
                      style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                      <option value="">Select</option>
                      <option value="ModelA">ModelA</option>
                      <option value="ModelB">ModelB</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <button
                    onClick={Button3handleBack}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "orange",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={Button3handleSubmit}
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



          {/* Button 4 */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#108b8b",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              flexGrow: "1",
              margin: "5px",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0d6666"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#108b8b"}
          >
            Add other items to Inventory
          </button>

        </div>

        <div className="container-fluid mt-4">
          {/* Search Section */}
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-8 d-flex">
              <div className="flex-grow-1 me-2" style={{ flexBasis: '60%' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    backgroundColor: '#dee2e6',}}
                />
              </div>
              <div style={{ flexBasis: '20%' }}>
                <button className="btn btn-secondary w-100">Filter</button>
              </div>
            </div>
          </div>

          

          {/* Table Section */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center">
              <thead>
                <tr>
                  <th>Device BarCode Number</th>
                  <th>Modular Type</th>
                  <th>Color</th>
                  <th>Board Type</th>
                  <th>Batch No</th>
                  <th>Xbee Type</th>
                  <th>Switch Count</th>
                  <th>Glass Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-truncate" style={{ maxWidth: '150px' }}>
                      {item.deviceBarCode}
                    </td>
                    <td>{item.modularType}</td>
                    <td>{item.color}</td>
                    <td>{item.boardType}</td>
                    <td>{item.batchNo}</td>
                    <td>{item.xbeeType}</td>
                    <td>{item.switchCount}</td>
                    <td>{item.glassType}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <button className="btn btn-primary btn-sm me-2 mb-1">Edit</button>
                        <button className="btn btn-danger btn-sm me-2 mb-1">Delete</button>
                        <button className="btn btn-success btn-sm mb-1">Submit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About