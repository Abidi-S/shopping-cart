import React from "react";
import { Button, Form } from "react-bootstrap";
import { Rating } from "react-native-elements";
import "./styles.css";

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating={byRating} style={{ cursor: "pointer" }} />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
