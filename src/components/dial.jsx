import React, { Component } from 'react'
import { Card,Icon,Grid,Button,Header, Segment } from 'semantic-ui-react'
import ReactSpeedometer from "react-d3-speedometer"
import SwipeableViews from 'react-swipeable-views'
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            <Card style={{height:'100%',width:'97%',margin:'2%'}}>
            <Card.Content>
              <Card.Description>
              <Grid>
                <Grid.Row>
                <Grid.Column width={2}>
                    <Icon name="angle left" style={{marginTop:'300%',textAlign:'center',cursor:'pointer'}} size="big" onClick={this.handleChange.bind(this)}/>
                </Grid.Column>
                <Grid.Column width={12}>
                <SwipeableViews index={this.state.index}>
                    <div>
                        <ReactSpeedometer 
                        minValue={0} 
                        maxValue={1000} 
                        fluidWidth={true} 
                        startColor="#F44336" 
                        endColor="#4CAF50" 
                        value={300} 
                        height={300} 
                        width={500}
                        needleTransitionDuration={4000}/>
                        <center style={{position: "relative",top: "-35px"}}>
                            <h3 style={{fontSize:'32px'}}>Your CO2 score for the past 6 months</h3>
                        </center>
                    </div>
                    <div>
                    <Line data={data} />
                    <center style={{marginTop:'6%',fontSize:'32px'}}>
                            <h3 style={{fontSize:'32px'}}>Your CO2 score trended over time</h3>
                        </center>
                    </div>
              </SwipeableViews>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Icon name="angle right" style={{marginTop:'300%',textAlign:'right',marginLeft:'30%',cursor:'pointer'}} size="big" onClick={this.handleChange.bind(this)}/>
                </Grid.Column>
             </Grid.Row>
             </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        <Segment style={{margin:'2% 2% 10% 2%',padding:'5%'}}>
        <Header as='h1' style={{fontSize:'36px'}}>What does this score mean ?</Header>
        <p style={{fontSize:'24px',marginTop:'3%'}}>This score indicates how close you are to acheiveing net-zero carbon emission status. </p>
        <p style={{fontSize:'24px'}}>net-zero is the commitment set by UK government to acheive by 2050.</p>
        <p style={{fontSize:'28px'}}>We want to help you get there too !</p>
        <center style={{marginTop:'15%'}}>
            <Button primary size="massive">View Score Breakdown</Button><br/><br/>
            <Button style={{backgroundColor:"#006A4D",color:"white",width:"320px"}} size="massive">Recommendations</Button>
        </center>
        </Segment>
          </div>
        )
    }
}
