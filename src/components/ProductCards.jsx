import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const productCards = ({ imageUrl, productName, productDesc, onboardedCustomers, style }) => (
  <Card style={style}>
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{productName}</Card.Header>
      <Card.Description>
        {productDesc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='user' />
      {onboardedCustomers} onboarded!
        </Card.Content>
  </Card>
);

export default productCards;