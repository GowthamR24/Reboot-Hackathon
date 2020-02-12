import React, { Component } from 'react'
import { Card,Icon,Grid,Button,Header, Segment,Image} from 'semantic-ui-react'
import ReactSpeedometer from "react-d3-speedometer"
import SwipeableViews from 'react-swipeable-views'
import {Line} from 'react-chartjs-2';
import { Link } from "react-router-dom";
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Carbon Index Timeline',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,106,77,0.4)',
        borderColor: 'rgba(0,106,77,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,106,77,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,106,77,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [223, 356, 450, 401, 497, 602, 576]
      }
    ]
  };

export default class Dial extends Component {
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }

    handleChange(){
        if(this.state.index == 0){
            this.setState({index:1})
        }
        else{
            this.setState({index:0})
        }
    }

    render() {
        return (
            <div>
            <Card style={{height:'100%',width:'98%',margin:'1%'}}>
            <Card.Content>
              <Card.Description>
              <Grid>
                <Grid.Row >
                <Grid.Column width={1} style={{padding:'0px'}}>
                    <Icon name="angle left" style={{marginTop:'300%',textAlign:'center',cursor:'pointer'}} size="large" onClick={this.handleChange.bind(this)}/>
                </Grid.Column>
                <Grid.Column width={14} style={{padding:'0px'}}>
                <SwipeableViews index={this.state.index}>
                    <div>
                        <ReactSpeedometer 
                        minValue={0} 
                        maxValue={1000} 
                        fluidWidth={true} 
                        startColor="#F44336" 
                        endColor="#4CAF50" 
                        value={300} 
                        height={200} 
                        width={500}
                        needleTransitionDuration={4000}/>
                        <Image src="/images/Dialtoxicsign.png" style={{width: "40px",position:"relative",left:"8%",top:"-80px"}}/>
                        <Image src="/images/Dialgreentree.png" style={{width: "40px",position:"relative",left:"66%",top:"-80px"}}/>
                        <center style={{position: "relative",top: "-20px"}}>
                            <h3 style={{fontSize:'12px'}}>Your carbon emission score for the past 6 months</h3>
                        </center>
                    </div>
                    <div>
                    <Line data={data} style={{marginTop:'6%'}}/>
                    <center style={{marginTop:'14%'}}>
                            <h3 style={{fontSize:'12px'}}>Your carbon emission score trended over time</h3>
                        </center>
                    </div>
              </SwipeableViews>
                </Grid.Column>
                <Grid.Column width={1} style={{padding:'0px'}}>
                    <Icon name="angle right" style={{marginTop:'300%',cursor:'pointer'}} size="large" onClick={this.handleChange.bind(this)}/>
                </Grid.Column>
             </Grid.Row>
             </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        <Segment style={{margin:'2% 2% 10% 2%',padding:'5%',textAlign:'center'}}>
        <Header as='h1' style={{fontSize:'25px'}}>What does this score mean ?</Header>
        <p style={{fontSize:'15px',marginTop:'3%'}}>This score indicates how close you are to acheiveing net-zero carbon emission status. </p>
        <p style={{fontSize:'15px'}}>net-zero is the commitment set by UK government to acheive by 2050.</p>
        <p style={{fontSize:'18px'}}>We want to help you get there too !</p>
        <center style={{marginTop:'5%'}}>
            <Link to='/spendings'>
            <Button primary style={{width:"195px"}}>View Score Breakdown</Button>
            </Link>
            <Link to='/products'>
            <Button style={{backgroundColor:"#006A4D",color:"white",marginTop:'2%'}}>Recommended Products</Button>
            </Link>
        </center>
        </Segment>
          </div>
        )
    }
}
