import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './BreadCrumbContainer.scss'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbContainer() {
  return (
    <div 
        role="presentation" 
        onClick={handleClick} 
        className="breadCrumb"
    >
        <div className="breadCrumb-title">
            <h1>Shop</h1>
        </div>
      <Breadcrumbs aria-label="breadcrumb" color="white">
        <Link underline="hover" color="white" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/shop"
          aria-current="page"
        >
          Shop
        </Link>
      </Breadcrumbs>
    </div>
  );
}
