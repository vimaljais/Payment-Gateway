import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";

import "../style/payment.css";
import Credit from "./credit";
import NetBanking from "./netBanking";
import Recommended from "./Recommended";
import Upi from "./upi";
import Wallets from "./wallet";

export default function Payment() {
  const [current, setCurrent] = useState("Recommended");

  const paymentOptions = [
    "Recommended",
    "Credit/ Debit Card",
    "Netbanking",
    "UPI",
    "Wallets",
  ];

  const setCurrentPayment = (method) => {
    setCurrent(method);
  };

  const paymentCategories = paymentOptions.map((method, i) => {
    return (
      <Button onClick={() => setCurrentPayment(method)} className="cat" key={i}>
        {method}
      </Button>
    );
  });

  const renderMethod = () => {
    switch (current) {
      case "Recommended":
        return <Recommended />;
      case "Credit/ Debit Card":
        return <Credit />;

      case "Netbanking":
        return <NetBanking />;

      case "UPI":
        return <Upi />;

      case "Wallets":
        return <Wallets />;

      default:
        return;
    }
  };

  return (
    <div>
      <Container className="payment_page">
        <Container className="payment_box bg-image1">
          <Row style={{ display: "flex", height: "100%" }}>
            <Col className="nopadding" xs={4}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p className="payment_header">Payment</p>
                <ButtonGroup className="categories " vertical>
                  {paymentCategories}
                </ButtonGroup>
              </div>
            </Col>
            <Col className="nopadding" xs={8}>
              <div style={{ justifyContent: "center", height: "100%" }}>
                {renderMethod()}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
