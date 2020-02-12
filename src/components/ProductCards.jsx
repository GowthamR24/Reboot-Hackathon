import React from 'react';

const productCards = ({ imageUrl, productName, productDesc, optedCustomers }) => (
  <Card>
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{productName}</Card.Header>
      <Card.Description>
        {productDesc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='user' />
      {optedCustomers} opted!
        </Card.Content>
  </Card>
);

export default productCards;