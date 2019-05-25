import React, { Fragment } from 'react';
import { Breadcrumb } from 'antd';
import { Movies } from '../components';

const Home = () => (<Fragment>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
  </Breadcrumb>
  <div style={{ background: '#fff', padding: 24, minHeight: '600px' }}>
    <h3>Exhibition Movies</h3>
    <Movies />
  </div>
</Fragment>);

export default Home;