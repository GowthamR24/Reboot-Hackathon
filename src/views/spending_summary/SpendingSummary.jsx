import React from 'react';
import Header from './../../components/header.jsx';
import { Statistic, Icon, Grid, Divider } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';
import './styles.css';

export default class SpendingSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: [
        {
          category: 'Transport',
          amount: 450,
          icon: 'train',
          iconColor: 'blue',
          carbonEmission: {
            datasets: [{
                data: [15, 20, 30],
                backgroundColor: ['#FF6F00', '#E53935', '#00838F']
            }],
            labels: [
                'Petrol',
                'Flight',
                'Public Trasport'
            ]
          }
        },
        {
          category: 'Utilities',
          amount: 750,
          icon: 'gripfire',
          iconColor: 'red',
          carbonEmission: {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['#E53935', '#00838F','#FF6F00'],
            }],
            labels: [
                'Gas - British Gas',
                'Electricity',
                'Water'
            ]
          }
        },
        {
          category: 'Shopping',
          amount: 350,
          icon: 'shopping basket',
          iconColor: 'teal',
          carbonEmission: {
            datasets: [{
                data: [10, 15, 15, 10],
                backgroundColor: ['#E53935', '#00838F','#FF6F00', '#00838F'],
            }],
            labels: [
                'Tesco',
                'Waitrose',
                'Caffe Nero',
                'Gather & Gather'
            ]
          }
        }
      ],
      chartOptions: {
        legend: { display: true },
        tooltips: { enabled: true }
      }
    }
  }

  generateSummaryList = () => (
    this.state.summary.map((item, i) => (
      <React.Fragment key={i}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Icon bordered name={item.icon} color={item.iconColor} />
          </Grid.Column>
          <Grid.Column width={8} style={{textAlign: 'left', fontSize: '20px'}}>
            {item.category}
          </Grid.Column>
          <Grid.Column width={3} style={{fontSize: '20px'}}>
            £{item.amount}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14}>
            <Doughnut data={item.carbonEmission} options={this.state.chartOptions}  />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
        <Divider />
      </React.Fragment>
    ))
  )

  render() {
    return (
      <div className='spending-summary'>
        <Header /> 
        <center>
          <Statistic
            size='large'
            style={{marginTop: '5%', marginBottom: '5%'}}
            label='Rolling Monthly Spend'
            value='£1,550'
          />
          <Divider />
          <Grid style={{width: '90vw', backgroundColor:'white', border:'none', marginTop: '10%', marginBottom: '10%'}}>
            {this.generateSummaryList()}
          </Grid>
        </center>
      </div>
    );
}
}