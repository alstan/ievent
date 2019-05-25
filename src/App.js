import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import moment from 'moment';
import './App.css';
import { 
  Tickets, 
  Home
} from './pages';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Route exact path="/" component={Home}/>
            <Route path="/tickets" component={Tickets} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Albuquerque INC. ©{moment().format('YYYY')} Created by Ant Secret
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
