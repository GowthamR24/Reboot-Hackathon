import React from 'react';
import Header from './../../components/header.jsx';
import { Statistic, Icon, Table, Divider } from 'semantic-ui-react';
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
                'Electricity - Octupus Energy',
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
        <Table.Row>
          <Table.Cell width={1}>
            <Icon bordered name={item.icon} color={item.iconColor} />
          </Table.Cell>
          <Table.Cell width={8} style={{textAlign: 'left'}}>
            {item.category}
          </Table.Cell>
          <Table.Cell width={7}>
            £{item.amount}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width={1}></Table.Cell>
          <Table.Cell width={14}>
            <Doughnut data={item.carbonEmission} options={this.state.chartOptions} />
            {/* {item.carbonEmission} */}
          </Table.Cell>
          <Table.Cell width={1}></Table.Cell>
        </Table.Row>
      </React.Fragment>
    ))
  )

  render() {
    return (
      <div className='spending-summary'>
        <Header /> 
        <center>
          <Statistic
            size='huge'
            style={{marginTop: '5%', marginBottom: '5%'}}
            label='Rolling Monthly Spent'
            value='£1,550'
          />
          <br />
          <Divider />
          <br />
          <Table style={{width: '95vw', fontSize: '16px', border:'none', marginTop: '10%', marginBottom: '10%'}}>
            <Table.Body>
              {this.generateSummaryList()}
            </Table.Body>
          </Table>
        </center>
      </div>
    );
}
}