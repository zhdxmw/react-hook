import React, {useContext, useState} from 'react'
import {CombineContext} from './CombineContext'
import { List, Button, Row, Col, Modal, Form, Input } from 'antd'

function CombineContextDemo(props: any) {
    const {state, dispatch} = useContext(CombineContext);
    const [showModal, setShowModal] = useState(false)
    const { getFieldDecorator } = props.form
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

    function deleteItem (index: number) {
        let list = state.UserReducer.list
        list.splice(index,1)
        dispatch({type: 'USER_DELETE', payload: list})
    }
    
    function handleSubmit() {
        props.form.validateFieldsAndScroll((err: any, values: any) => {
            if(!err){
                let list = state.UserReducer.list
                list.push(values)
                dispatch({type: 'USER_ADD', payload: list})
                setShowModal(false)
            }
        })
    }

    return (
        <>
            <div>
                <Button onClick={() => dispatch({type: 'count.add'})}>add</Button>
                <span> state count : {state.CountReducer && state.CountReducer.count}</span>
                <Button onClick={() => dispatch({type: 'count.reduce'})}>reduce</Button>
            </div>
            <br/>
            <div>
                <List
                    size="large"
                    header={<div style={{color: '#ffffff'}}>用户列表</div>}
                    footer={<Button onClick={() => setShowModal(true)}>新建</Button>}
                    bordered
                    dataSource={state.UserReducer && state.UserReducer.list}
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
            <Modal
                 title="新建用户"
                 visible={showModal}
                 onOk={handleSubmit}
                 onCancel={()=>setShowModal(false)}
            >
                <Form {...formItemLayout}>
                    <Form.Item label="用户名">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ],
                        })(<Input />)}
                     </Form.Item>
                     <Form.Item label="介绍">
                        {getFieldDecorator('desc', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ],
                        })(<Input />)}
                     </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Form.create()(CombineContextDemo)