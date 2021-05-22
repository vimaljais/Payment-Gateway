import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row,
  Col,
} from "reactstrap";

import "../style/netBanking.css";

const NetBanking = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("--Select Bank--");

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const onChangeRadio = (event) => {
    setSelectedBank(event.target.value);
    setDropdownLabel("--Select Bank--");
  };

  const changeValue = (e) => {
    setSelectedBank(e.currentTarget.textContent);
    setDropdownLabel(e.currentTarget.textContent);
    document.getElementById("radio").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
    document.getElementById("radio4").checked = false;
    document.getElementById("radio5").checked = false;
  };

  return (
    <div className="netbanking_container">
      <h3 className="pop_bank">Popular Banks</h3>
      <div className="radio_buttons" onChange={onChangeRadio}>
        <Row>
          <Col className="pop_bank_radio" xs={4}>
            <input id="radio" type="radio" value="HDFC" name="bank" /> HDFC Bank
          </Col>
          <Col className="pop_bank_radio" xs={4}>
            <input id="radio2" type="radio" value="ICICI" name="bank" /> ICICI
            Bank
          </Col>
          <Col className="pop_bank_radio" xs={4}>
            <input
              id="radio3"
              type="radio"
              value="State Bank of India"
              name="bank"
            />{" "}
            State Bank
          </Col>
          <Col className="pop_bank_radio" xs={4}>
            <input id="radio4" type="radio" value="Axis" name="bank" /> Axis
            Bank
          </Col>
          <Col className="pop_bank_radio" xs={4}>
            <input id="radio5" type="radio" value="Kotak" name="bank" /> Kotak
          </Col>
        </Row>
      </div>

      <h3 className="other_bank">Other Banks</h3>
      <div className="other_bank_dropdown_container">
        <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle style={{ fontSize: "14px" }} caret>
            {dropdownLabel}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={changeValue}>Central Bank</DropdownItem>
            <DropdownItem onClick={changeValue}>Bank Of India</DropdownItem>
            <DropdownItem onClick={changeValue}>Indian Bank</DropdownItem>
            <DropdownItem onClick={changeValue}>IDFC Bank</DropdownItem>
            <DropdownItem onClick={changeValue}>
              Indian OverSeas Bank
            </DropdownItem>
            <DropdownItem onClick={changeValue}>IDBI Bank</DropdownItem>
            <DropdownItem onClick={changeValue}>Federal Bank</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="netbanking_pay_button">
        <Button
          style={{
            width: "100px",
          }}
          color="success"
          onClick={() => alert(`payed using ${selectedBank}`)}
          disabled={!selectedBank}
        >
          Pay
        </Button>
      </div>
      <div className="netbanking_using_bank">
        <p style={{ fontSize: "16px", fontWeight: "500" }}>
          {selectedBank !== ""
            ? `using ${selectedBank}`
            : `select a bank to continue`}
        </p>
      </div>
    </div>
  );
};

export default NetBanking;
