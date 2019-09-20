import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { dealList } from './action/reduxHook'
import { Button, List, Row, Col } from 'antd'

interface User {
    name: string;
    desc: string;
}
interface PropsType {
    deal: Function;
    count: number;
    list: User[];
}

const mapStateToProps = (state: any) => ({
    list: state.reduxState.list,
    count: state.reduxState.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    deal: (params: User[]) => dispatch(dealList(params))
})

class OriginRedux extends React.Component<PropsType, {}> {

    deleteItem = (index: number) => {
        let { list, deal } = this.props
        list.splice(index,1)
        deal(list)
    }

    render () {
        const { list } = this.props
        console.log(list);
        
        return (
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
                                <Col span={4} style={{textAlign: 'right'}}><Button size="small" onClick={() => this.deleteItem(index)}>删除</Button></Col>
                            </Row>
                        </List.Item>
                    )}
                />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OriginRedux);