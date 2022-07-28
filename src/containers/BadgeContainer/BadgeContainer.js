import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { CartState } from '../../contexts/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function BadgeContainer({children}) {

    const {cart} = CartState()

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="secondary">
        {children}
      </StyledBadge>
    </IconButton>
  );
}