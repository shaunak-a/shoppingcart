import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './CartContainer.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartState } from '../../contexts/CartContext';

export default function CartTableContainer() {

    const { cart, setCart } = CartState()
    const [qty] = useState(1)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} style={{margin: '2rem'}}>
            <Grid item xs>
                <span className="table-heading">Product Detail</span>
            </Grid>
            <Grid item xs={2}>
                <span className="table-heading">Product QTY</span>
            </Grid>
            <Grid item xs={2}>
                <span className="table-heading">Price/Pcs</span>
            </Grid>
            <Grid item xs={2}>
                <span className="table-heading">Total</span>
            </Grid>
            <Grid item xs={2}>

            </Grid>
        </Grid>
        {
            cart && cart.map((c) => {
                return (
                    <Grid container spacing={4} style={{margin: '2rem'}}>
                        <Grid item xs>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div>
                                    <img src={c?.image_link} alt={c?.name} />
                                </div>
                                <div>
                                    <span>{c?.name}</span><br /><br />
                                    <span style={{color: '#4e4e4e'}}>{c?.product_type}</span>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={2}>
                            <div>
                                <span>-</span> {"  "} 
                                <span style={{border: '1px solid black', padding: '20px', margin: '0 1rem'}}>
                                    {qty}
                                </span> {"  "} 
                                <span>+</span> 
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            ${c?.price}
                        </Grid>
                        <Grid item xs={2}>
                            ${c?.price}
                        </Grid>
                        <Grid item xs={2}>
                            <DeleteIcon onClick={() => setCart(cart.filter((ca) => ca.id !== c.id))} />
                        </Grid>
                    </Grid>
                )
            })
        }
    </Box>
  );
}