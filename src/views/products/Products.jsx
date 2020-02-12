import React from 'react';
import Header from './../../components/header.jsx';
import ProductCard from './../../components/ProductCards.jsx';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          imageUrl: './../src/images/lbg current account.png',
          productName: 'Money Tree Rewards Current Account',
          productDesc: 'Earn points based on sustainable spending',
          onboardedCustomers: '50000+ Customers '
        },
        {
          imageUrl: './../src/images/lbgcc.png',
          productName: 'Money Tree Rewards Credit Card',
          productDesc: 'Earn points based on sustainable spending',
          onboardedCustomers: '15000+ Customers '
        },
        {
          imageUrl: './../src/images/LBGtoxic.pnglbg mortgage.png',
          productName: 'Money Tree Mortgage',
          productDesc: 'Best rates for more efficient homes',
          onboardedCustomers: '2000+ Customers '
        }
      ]
    }
  }
  generateProductsList = () => (
    this.state.products.map((item, i) => (
      <ProductCard
        key={i}
        imageUrl={item.imageUrl}
        productName={item.productName}
        productDesc={item.productDesc}
        onboardedCustomers={item.onboardedCustomers}
        style={{width: '75vw', height: '400px'}}
      />
    ))
  )
  render() {
    return (
      <div>
        <Header />
        <center>
          <div>
            <h1 style={{fontSize: '45px'}}>Green Products</h1>
            <p style={{fontSize: '15px'}}>Here we list some of our green products</p>
          </div>
          <br />
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', width: '90vw', marginTop: '30px', marginBottom: '30px'}}>
            {this.generateProductsList()}
          </div>
        </center>
      </div>
    );
  }
}