  // src/App.js
  import React, { Component } from 'react';
  import './App.css';
  //引入电影组件
  import MovieContainer from './components/MovieContainer';
  //引入路由组件
  import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
  import { Layout,Menu } from 'antd';
  const {Header, Footer, Content,} = Layout;



  class App extends Component {
    render() {
      return (
        <Router>
        <Layout style={{height:'100%'}}>
        <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/movie'>电影</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
          </Menu>
    </Header>
        <Content>
          <Switch>
          <Route exact path="/" render={()=><div>首页</div>}/>
          <Route path='/movie' render={()=><MovieContainer/>}/>
          <Route exact path='/about' render={()=><div>关于</div>}/>
          </Switch>
        </Content>
      </Layout>
      </Router>
      );
    }
  }

  export default App;