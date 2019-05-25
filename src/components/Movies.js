import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import { getMovies } from '../services';

class Movies extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    console.log(await getMovies());
  }

  render() {
    return (<Fragment>
      {movies.map(movie => 
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14744-cartaz.jpg" />}
        >
          <h4>Aladin</h4>
        </Card>
      )}
      
    </Fragment>);
  }
}
  

export default Movies;