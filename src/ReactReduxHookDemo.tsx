import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Button, List, Row, Col } from 'antd'
import { StateType } from './reducer/reduxHook'

interface ReduxState{
    reduxState: StateType
}

let set = new Set()

function ReactReduxHookDemo() {

    const count = useSelector((state: ReduxState) => state.reduxState.count)
    const list = useSelector((state: ReduxState) => state.reduxState.list)
    const store = useStore()
    // console.log(store.getState());
    
    // 获取 dispatch
    const dispatch = useDispatch();

    const addCount = useCallback(() => {
        dispatch({
            type: 'ADD_COUNT'
        })
    },[dispatch])

    const reduceCount = useCallback(() => {
        dispatch({
            type: 'REDUCE_COUNT'
        })
    },[dispatch])

    const memoizedCallback = useCallback(() => {
        console.log('count:' + count);
    },[count])

    set.add(memoizedCallback)
    console.log(set);
    
    
    // function reduceCount() {
    //     dispatch({
    //         type: 'REDUCE_COUNT'
    //     })
    // }

    const deleteItem = useCallback((index: number) => {
        let userlist = JSON.parse(JSON.stringify(list))

        userlist.splice(index,1)
        dispatch({
            type: 'DEAL_LIST',
            payload: userlist
        })

    }, [list,dispatch])



    useEffect(() => {
        console.log(list);
    }, [list])

    return (
        <>
            <div>
                <Button onClick={addCount}>add</Button>
                <span> state count : {count}</span>
                <Button onClick={reduceCount}>reduce</Button>
            </div>
            <Button onClick={memoizedCallback}>set size: {set.size} usecallback</Button>
            <div>
                <List
                    size="large"
                    header={<div style={{color: '#ffffff'}}>用户列表</div>}
            
                    bordered
                    dataSource={list}
                    renderItem={(item: {name: string, desc?: string}, index) => (
                        <List.Item>
                            <Row type="flex" align="middle" style={{width: '100%', color: '#ffffff'}}>
                                <Col span={6}>{item.name}</Col>
                                <Col span={14}>{item.desc}</Col>
                                <Col span={4} style={{textAlign: 'right'}}><Button size="small" onClick={() => deleteItem(index)}>删除</Button></Col>
                            </Row>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ReactReduxHookDemo