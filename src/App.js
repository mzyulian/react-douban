  // src/App.js
  import React, { Component } from 'react';
  import './App.css';
  import { Layout,Menu } from 'antd';
  const {Header, Footer, Content,} = Layout;

  class App extends Component {
    render() {
      return (
        <Layout style={{height:'100%'}}>
        <Header className="header">
      <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">电影</Menu.Item>
            <Menu.Item key="3">关于</Menu.Item>
          </Menu>
    </Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2019 Created by Ant Yu
        </Footer>
      </Layout>
      );
    }
  }

  export default App;