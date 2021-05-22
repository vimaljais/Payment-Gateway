import React, { useState } from "react";
import { Input, Button } from "reactstrap";

import "../style/wallet.css";

const Wallets = () => {
  const [number, setNumber] = useState();

  const numberSetter = (event) => {
    setNumber(event.target.value);
  };
  return (
    <div className="wallet_container">
      <h3 style={{ padding: "0px 0px 10px 10px", width: "100%" }}>Paytm</h3>
      <Input
        style={{ width: "80%", padding: "10px 0px 10px 0px" }}
        type="number"
        name="number"
        id="paytm"
        placeholder="Enter Paytm number"
        onChange={numberSetter}
      />
      <div style={{ padding: "20px 0px 10px 0px" }}>
        <Button
          style={{ paddingTop: "10px" }}
          disabled={!number}
          onClick={() => alert("linked")}
        >
          Link Wallet
        </Button>
      </div>
    </div>
  );
};

export default Wallets;
