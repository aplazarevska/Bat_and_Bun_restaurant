import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { CART_ADD } from "../../reducers/constants.js";
import { CartContext } from "../../contexts/CartContext";

const MenuItemDetail = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const [qtyDisplay, setQtyDisplay] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch({
      type: CART_ADD,
      payload: {
        name: item.name,
        qty: qtyDisplay,
        price: Number(item.price),
        item: item._id,
      },
    });

    // Redirect to Cart View
    navigate("/cart");
  };

  return (
    <Card className="item-detail-card" elevation={0}>
      <CardMedia component="img" image={item.image} alt={item.name} />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="body1">{item.notes && item.notes}</Typography>
        <Typography variant="body2">
          ${item.price ? item.price.toFixed(2) : "Unknown"}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          {qtyDisplay > 1 ? (
            <IconButton
              aria-label="reduce quantity"
              className="min-btn"
              onClick={() => qtyDisplay > 1 && setQtyDisplay(qtyDisplay - 1)}
            >
              <RemoveIcon />
            </IconButton>
          ) : (
            <span
              style={{ display: "inline-block", width: "40px", height: "20px" }}
            ></span>
          )}

          <span className="qty-number">{qtyDisplay}</span>

          {qtyDisplay < 10 ? (
            <IconButton
              aria-label="add quantity"
              className="add-btn"
              onClick={() => qtyDisplay < 10 && setQtyDisplay(qtyDisplay + 1)}
            >
              <AddIcon />
            </IconButton>
          ) : (
            <span
              style={{ display: "inline-block", width: "40px", height: "20px" }}
            ></span>
          )}
        </div>
        <Button
          variant="contained"
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuItemDetail;
