import React from 'react';
import Header from './../../components/header.jsx';
import { Grid, Image } from 'semantic-ui-react'

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  generateProductsList = () => (
    this.state.products.map((item, i) => (
      <Grid.Row>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    ))
  )
  render() {
    return (
      <div>
        <Header />
        <center>
          <div>
            <h1 style={{fontSize: '45px'}}>Our Products</h1>
            <p style={{fontSize: '15px'}}>Here we present some of our interesting products</p>
          </div>
          <Grid columns={2} divided style={{width: '70vw'}}>
            <Grid.Row>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </center>
      </div>
    );
  }
}