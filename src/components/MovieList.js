import React, { Component } from 'react';
import '../App.css'
//引入组件电影box
import Moviebox from './MovieBox.js'
//引入fetchJson 处理跨域
import fetchJson from 'fetch-jsonp'
export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            //将电影的类型，当前页，每页多少条数据
            type:this.props.match.params.type,
            currentPage:this.props.match.params.currentpage,
            count:12,
            /* 渲染的数据 */
            movieList:[],
            total:0
        }
    }
    //组件创建的时候数据请求  componentWillMount 组件首次加载的时候会执行
    componentWillMount(){
        // let start=(this.state.currentPage-1)*this.state.count
        // console.log(start);
        // let url=`https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}}`
        // //fetch 数据请求
        // fetchJson(url)
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        //     this.setState({
        //         movieList:res.subjects,
        //         total:res.total
        //     })
        // })
        //数据请求
        this.getList()
    }
    //组件的更新 componentWillReceiveProps 来更新组件的数据
    //数据的请求必须在 setstate 的回调函数中去调用
    componentWillReceiveProps(newprops){
        //组件的state 重新赋值
        this.setState({
            type:newprops.match.params.type,
            currentPage:newprops.match.params.currentpage,
            movieList:[],
            total:0
        },()=>{this.getList()})
    }
    //数据请求的方法
    getList=()=>{
        let start=(this.state.currentPage-1)*this.state.count
        let url=`https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}}`
        //fetch 数据请求
        fetchJson(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({
                movieList:res.subjects,
                total:res.total
            })
        })
    }
    render(){
        return(
            <div className='moviebox'>
            {/* 设置一个属性history 传递路由跳转,因为再详情页需要用到history 进行跳转*/}
              { this.state.movieList.map(item=> <Moviebox {...item} key={item.id} history={this.props.history}/>)}
            </div>
        )
    }
}