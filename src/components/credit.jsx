import React, { useState } from "react";

import {
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../style/credit.css";

const Credit = () => {
  const [card, setCard] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [cvv, setcvv] = useState(null);
  const [MonthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [YearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [monthLabel, setMonthLebel] = useState("01");
  const [yearLabel, setYearLabel] = useState("2024");

  const toggleMonth = () => setMonthDropdownOpen(!MonthDropdownOpen);

  const toggleYear = () => setYearDropdownOpen(!YearDropdownOpen);

  const changeMonth = (e) => {
    setMonth(e.currentTarget.textContent);
    setMonthLebel(e.currentTarget.textContent);
  };

  const changeYear = (e) => {
    setYear(e.currentTarget.textContent);
    setYearLabel(e.currentTarget.textContent);
  };

  const cardSetter = (event) => {
    setCard(event.target.value);
  };
  const cvvSetter = (event) => {
    setcvv(event.target.value);
  };

  return (
    <div className="credit_container">
      <h3 style={{ padding: "0px 0px 10px 10px", width: "100%" }}>
        Pay using Credit/Debit
      </h3>
      <Input
        style={{ width: "80%", padding: "10px 0px 10px 0px" }}
        type="number"
        name="number"
        id="card"
        placeholder="Enter your Card Number"
        onChange={cardSetter}
      />{" "}
      <div className="card_expiry">
        <p className="expiry">Card Expiration:</p>
        <Dropdown
          className="month"
          direction="right"
          isOpen={MonthDropdownOpen}
          toggle={toggleMonth}
        >
          <DropdownToggle style={{ fontSize: "14px", margin: "10px" }} caret>
            {monthLabel}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={changeMonth}>01</DropdownItem>
            <DropdownItem onClick={changeMonth}>02</DropdownItem>
            <DropdownItem onClick={changeMonth}>03</DropdownItem>
            <DropdownItem onClick={changeMonth}>04</DropdownItem>
            <DropdownItem onClick={changeMonth}>05</DropdownItem>
            <DropdownItem onClick={changeMonth}>06</DropdownItem>
            <DropdownItem onClick={changeMonth}>07</DropdownItem>
            <DropdownItem onClick={changeMonth}>08</DropdownItem>
            <DropdownItem onClick={changeMonth}>09</DropdownItem>
            <DropdownItem onClick={changeMonth}>10</DropdownItem>
            <DropdownItem onClick={changeMonth}>11</DropdownItem>
            <DropdownItem onClick={changeMonth}>12</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          direction="right"
          isOpen={YearDropdownOpen}
          toggle={toggleYear}
        >
          <DropdownToggle style={{ fontSize: "14px", margin: "10px" }} caret>
            {yearLabel}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={changeYear}>2020</DropdownItem>
            <DropdownItem onClick={changeYear}>2021</DropdownItem>
            <DropdownItem onClick={changeYear}>2022</DropdownItem>
            <DropdownItem onClick={changeYear}>2023</DropdownItem>
            <DropdownItem onClick={changeYear}>2024</DropdownItem>
            <DropdownItem onClick={changeYear}>2025</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input
          style={{ width: "15%", margin: "10px" }}
          type="password"
          name="number"
          id="CVV"
          placeholder="CVV"
          onChange={cvvSetter}
        />
      </div>
      <div className="netbanking_pay_button">
        <Button
          style={{
            width: "100px",
          }}
          color="success"
          onClick={() => alert(`payed using ${card} ${month} ${year}`)}
          disabled={!cvv}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Credit;
