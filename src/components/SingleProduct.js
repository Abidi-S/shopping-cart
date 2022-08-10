import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context.js";
import { Rating } from "./Rating.js";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>£ {prod.price[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery Available</div>
            ) : (
              <div>No Fast Delivery Available</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            // some helps us check if a particular thing exists inside an array
            cart.some((p) => p.id === prod.id) ? (
              <Button
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                }}
                variant="danger"
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: prod });
                }}
                disabled={!prod.inStock}
              >
                {" "}
                {!prod.inStock ? "Out of Stock" : "Add to cart"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
