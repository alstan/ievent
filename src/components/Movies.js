import React, { Component, Fragment } from 'react';
import { Card, Col, Row } from 'antd';
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
      <Row gutter={16}>
        {movies.map(movie => 
          <Col span={6}>
            <Card
              key={movie.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={movie.imageSrc} />}
            >
              <h4>{movie.name}</h4>
            </Card>
          </Col>
        )}
      </Row>
    </Fragment>);
  }
}
  

export default Movies;