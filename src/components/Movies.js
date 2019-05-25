import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import { getMovies } from '../services';

class Movies extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    this.setState({ movies: await getMovies() });
  }

  render() {
    const { movies } = this.state;

    return (<Fragment>
      {movies.map(movie => 
        <Card
          key={movie.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={movie.imageSrc} />}
        >
          <h4>{movie.name}</h4>
        </Card>
      )}
    </Fragment>);
  }
}
  

export default Movies;