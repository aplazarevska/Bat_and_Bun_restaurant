import React from 'react';
import {
  Button,
  IconButton,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  ccyFormat,
  subtotal
} from '../utils/cartOrderUtils';


const CartTable = ({
  emptyMessage,
  cartItems,
  deleteFromCart,
  addQty,
  minQty
}) => {
  const totalCost = subtotal(cartItems);

  return (
    cartItems.length > 0
    ? (
      <TableContainer className="cart-table">
        <Table sx={{ maxWidth: 900 }} aria-label="cart details">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.name}>
                <TableCell colSpan={1}>
                  {item.name}
                  {deleteFromCart &&
                    (<Button
                      color="error"
                      sx={{display: 'block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em'}}
                      onClick={() => deleteFromCart(item)}
                    >
                      Delete
                    </Button>)
                  }
                </TableCell>
                <TableCell align="center">
                  {item.qty > 1 && minQty
                  ? (
                      <IconButton
                        aria-label="reduce quantity"
                        className="min-btn"
                        onClick={() => minQty(item)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    )
                  : (
                      <span style={{display: 'inline-block', width: '40px', height: '20px'}}></span>
                    )
                  }
                  <span style={{display: 'inline-block', width: '50px', textAlign: 'center'}}>{item.qty}</span>
                  {item.qty < 10 && addQty
                  ? (
                      <IconButton
                        aria-label="add quantity"
                        className="add-btn"
                        onClick={() => addQty(item)}
                      >
                        <AddIcon />
                      </IconButton>
                    )
                  : (
                      <span style={{display: 'inline-block', width: '40px', height: '20px'}}></span>
                    )
                  }  
                </TableCell>
                <TableCell align="right">${ccyFormat(item.price * item.qty)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} align="left" sx={{ fontSize: '1.05em', fontWeight: '700'}}>Total</TableCell>
              <TableCell align="right" sx={{ fontSize: '1.05em', fontWeight: '700'}}>${ccyFormat(totalCost)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
    : emptyMessage && (
      <Container><h4 style={{textAlign: 'center'}}>{emptyMessage}</h4></Container>
    )
  )
}

CartTable.defaultProps = {
  emptyMessage: "",
  cartItems: null,
  deleteFromCart: null,
  addQty: null,
  minQty: null
}

export default CartTable;
