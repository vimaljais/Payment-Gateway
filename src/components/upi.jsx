import React, { useState } from "react";
import { Input, Button } from "reactstrap";

import "../style/upi.css";

const Upi = () => {
  const [upi, setupi] = useState();

  const numberSetter = (event) => {
    setupi(event.target.value);
  };
  return (
    <div className="upi_container">
      <h3 style={{ padding: "0px 0px 10px 10px", width: "100%" }}>
        Enter your Upi ID
      </h3>
      <Input
        style={{ width: "80%", padding: "10px 0px 10px 0px" }}
        type="number"
        name="number"
        id="upi"
        placeholder="Enter UPI number"
        onChange={numberSetter}
      />
      <div
        style={{
          padding: "20px 0px 10px 0px",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          style={{
            paddingTop: "10px",
            alignContent: "center",
            display: "flex",
          }}
          disabled={!upi}
          onClick={() => alert("UPI VERIFY")}
        >
          VERIFY
        </Button>
      </div>
    </div>
  );
};

export default Upi;
