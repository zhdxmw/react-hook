import React from 'react'
import { setInterval } from 'timers';
import {Input} from 'antd'

interface PropsType{
  propsNum: number;
}

class CounteWithClass extends React.Component<PropsType> {
    state = {
      count: 0,
      delay: 1000,
    };

    interval = setInterval(() => null, 1000);

    // 此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。
    // 不管原因是什么，都会在每次渲染前触发此方法
    static getDerivedStateFromProps(props: any, state: any) {
      // console.log(state);
      
      // return {
      //   count: state.count,
      //   delay: props.propsNum || state.propsNum
      // }
      return state
    }

    componentDidMount() {
      this.interval = setInterval(this.tick, this.state.delay);
    }

    // 组件Props或者state改变时触发
    shouldComponentUpdate(nextProps: any, nextState: any) { 
      return true
    }

    // 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
    getSnapshotBeforeUpdate(prevProps: any, prevState: any) { 
      // 组件更新前触发
      return prevState.delay
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
      if (prevState.delay !== this.state.delay) {
        clearInterval(this.interval);
        this.interval = setInterval(this.tick, this.state.delay);
      }
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    componentDidCatch() {
      // 错误处理
    }
    tick = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ delay: Number(e.target.value) });
      console.log(e.target.value);
      
    }
  
    render() {
      return (
        <>
          <div>
            <h1>{this.state.count}</h1>
            <Input value={this.state.delay} onChange={this.handleDelayChange} />
          </div>
        </>
      );
    }
  }
  export default CounteWithClass