import React, {useRef, MutableRefObject} from 'react';

import './App.css';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';

import Counter from './Counter'
import TextInputWithFocusButton from './UseRef'
import CounteWithClass from './CounterWithClass'

import {AppProvider, Demo} from './SimpleRedux'
import {CombineProvider} from './CombineContext'
import CombineContextDemo from './CombineContextDemo'
import ReduxHookDemo from './ReduxHookDemo'
import ReactReduxHookDemo from './ReactReduxHookDemo'
// import OriginRedux from './originRedux'
import UseMemoDemo from './useMemoDemo'

const App: React.FC = () => {

  const fancyInputRef: MutableRefObject<any> = useRef(null)
  
  function focusChild() {
    fancyInputRef.current.focus()
  }

  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <header className="App-header">
          <p>hook实现 interval 计数器 可暂停 修改间隔时长 自定义hook</p>
          <Counter delay={2000}/>

          <p>class组件实现 interval 计数器</p>
          <CounteWithClass propsNum={2000}/> 

          <div style={{marginTop: 20}}>
            <div>UseRef 使用</div>
            <button onClick={focusChild}>focusChild</button>
            <TextInputWithFocusButton ref={fancyInputRef}/>
          </div>

          <p>hook useReducer useContext</p>
          <AppProvider>
            <Demo/>
          </AppProvider>
          
          <p>hook useReducer useContext 多个reducer 整合</p>
          <CombineProvider>
            <CombineContextDemo/>
          </CombineProvider>


          <p>hook + redux + redux-react-hook  hook+插件redux-react-hook 使用redux</p>
          <ReduxHookDemo/>

          <p>hook+ react-redux 使用redux</p>
          <ReactReduxHookDemo />
          
          <p>useMemo 案例</p>
          <UseMemoDemo />
        </header>
      </ConfigProvider>    
      
    </div>
  );
}

export default App;
