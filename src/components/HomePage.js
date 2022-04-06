import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { data } from "../db";

function HomePage() {
  const [popup, setPopup] = useState([]);
  const [poptoggle, setPoptoggle] = useState(false);
  const [select, setSelect] = useState([""]);
  const details = (e) => {
    setPopup([e]);
    setPoptoggle(!poptoggle);
  };
  return (
    <div className="container">
      <div className="column header">
        <ButtonGroup>
          <Button
            className="btn"
            name="All"
            onClick={(e) => setSelect((old) => [...old, ""])}
            value=""
          >
            All
          </Button>
          <Button
            data-testid="btn-Movie"
            className="btn"
            name="Movies"
            onClick={(e) => setSelect((old) => [...old, "Movies"])}
            value="Movies"
          >
            Movies
          </Button>
          <Button
            className="btn"
            name="Travel"
            onClick={(e) => setSelect((old) => [...old, "Travel"])}
            value="Travel"
          >
            Travel
          </Button>
          <Button
            className="btn"
            name="Dining"
            onClick={(e) => setSelect((old) => [...old, "Dining"])}
            value="Dining"
          >
            Dining
          </Button>
          <Button
            className="btn"
            name="Lifestyle"
            onClick={(e) => setSelect((old) => [...old, "Lifestyle"])}
            value="Lifestyle"
          >
            Lifestyle
          </Button>
          <Button
            className="btn"
            name="Shopping"
            onClick={(e) => setSelect((old) => [...old, "Shopping"])}
            value="Shopping"
          >
            Shopping
          </Button>
        </ButtonGroup>
      </div>
      <div className="header2">
        <button className="btn" onClick={() => setSelect(" ")}>
          Clear
        </button>
      </div>
      <div className="row cards">
        {data.map((e, index) => {
          return (
            <div className="card" onClick={() => details(e)}>
              <p>Card name: {e.cardName}</p>
              <p data-testid="display-benefit">Benefits:</p>
              {e.benefitsDetails.map((a) => {
                if (select.includes(a.name)) {
                  return (
                    <div>
                      <li>{a.name}</li>
                    </div>
                  );
                } else return "";
              })}
            </div>
          );
        })}
      </div>
      {poptoggle && (
        <div className="popContainer">
          <div className="popBody">
            {popup.map((d) => {
              return (
                <div className="popCard">
                  <div className="row head">
                    <h4 style={{ width: "90%", float: "right" }}>
                      {d.cardName}
                    </h4>
                    <button className="popButton" onClick={details}>
                      x
                    </button>
                  </div>
                  <p>Status: {d.status}</p>
                  <p>Gender type: {d.gender}</p>
                  <p>Min Eligible Stated Income: {d.minEligibleStatedIncome}</p>
                  <p>Max Eligible Stated Income: {d.maxEligibleStatedIncome}</p>
                  <p>Min Eligible Credit Limit: {d.minEligibleCreditLimit}</p>
                  <p>Max Eligible Credit Limit: {d.maxEligibleCreditLimit}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default HomePage;

/* {data
          .filter((obj) =>
            obj.benefitsDetails.find((obj)=>obj.name.includes(filterType))
          )
          .map((d, i) => {
            return (
              <div className="card">
                <p>Card name: {d.cardName}</p>
                <p>
                  Benefits:
                  {d.benefitsDetails.map((obj) => (
                    <li>{obj.name}</li>
                  ))}
                </p>
              </div>
            );
          })} */
