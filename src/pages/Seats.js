import React, { Component, Fragment } from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { getSeats } from '../services';

class Seats extends Component {
  state = {
    seats: []
  }

  async componentDidMount() {
    this.setState({ seats: await getSeats() });
  }

  render() {
    const { seats } = this.state;

    console.log(seats) 

    return (<Fragment> 
      <Row gutter={16}>
        <h2>Choose a Seat!</h2>
        
          {seats.map(seat =>
          <Col span={6}>
            <Link to="/tickets">
              <Button
              key={seat.id}
              hoverable
              >
              {seat.number} 
              </Button>
            </Link>
          </Col>
        )}
      </Row>
    </Fragment>

    );


  }


}

export default Seats