import React, { Component } from 'react';
//引入fetchJson 来跨域请求
import fetchJsonp from 'fetch-jsonp'
//引入组件button
import { Button} from 'antd';
//引入loadding组件
import { Spin, Alert } from 'antd';
//类的形式创建组件
export default class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            //电影详情数据
            moviedata:{},
            //定义异步加载的loaddig动画
            loadding:false
        }
    }
    //组件创建的时候进行数据请求
    componentWillMount(){
        this.setState({
            loadding:true
        })
        let url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}`
        fetchJsonp(url)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({
                moviedata: res,
                loadding: false
            })
          })

    }
    //获取数据
    // getdetaildata=()=>{
    //     let url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}`
    //     fetchJsonp(url)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res);
    //       this.setState({
    //         moviedata: res,
    //         loading: false
    //       })
    //     })
    // }
    render(){
      return(
          <div>
              {this.state.loadding?  <Spin tip="Loading..."><Alert  message="正在加载..." description="电影详情加载中..."type="info" /></Spin>:<div>
              <Button type="primary" >返回</Button>
              <div style={{textAlign:'center'}}>
                <h1>{this.state.title}</h1>
                <img src={this.state.moviedata.images.large} alt={this.state.moviedata.title}/>
              </div>
              <p>{this.state.moviedata.summary}</p>
          </div>}
          </div>
      )
  }
}