import React, { Component } from 'react';
import '../App.css';
//引入路由组件
import {HashRouter as Router,Link,Route} from 'react-router-dom'
//引入电影列表组件
import MovieList from './MovieList.js'
//引入antd ui
import {  Layout, Menu} from 'antd';
const {  Content,Sider,Footer } = Layout;

//类的形式创建组件
export default class MovieContainer extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <Router>
            <Layout >
            <Sider  width={200} style={{
      height: '100vh', position: 'fixed', left: 0,paddingTop:64
    }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0, }}
              >
                  <Menu.Item key="1"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
                  <Menu.Item key="3"><Link to='/movie/top250/1'>Top250</Link></Menu.Item>
              </Menu>
            </Sider>
            <Layout >
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,paddingLeft:200,overflow: 'initial',paddingTop:64
              }}
              >
              {/* 电影列表组件渲染,正在热映，即将上映，Top250渲染的组件布局差不多，统一渲染一个组件 */}
              <Route  path='/movie/:type/:currentpage' render={(props)=><MovieList {...props}/>}/>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2019 Created by Ant Yu
      </Footer>
              </Layout>
            </Layout>
            </Router>
        )
    }
} 