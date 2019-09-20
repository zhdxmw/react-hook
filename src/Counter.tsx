import React, {
    useState, ChangeEvent, useEffect, useCallback
} from 'react'
import { Button, Input } from 'antd'
import useInterval from './UseInterval'
import { log } from 'util'
interface PropsType{
    delay: number
}

function Counter(props: PropsType) {
    const [count, setCount] = useState(0)
    // 组件的初始渲染中起作用，后续渲染时会被忽略 适用需要通过计算或其他处理的初始值
    const [delay, setDelay] = useState(() => {
        const initialDelay = delayCalculation(props.delay);
        return initialDelay
    })
    const [isRunning, setIsRunning] = useState(true)
    const [arr, setArr] = useState([{name: 'aaa'},{name: 'bbb'}])
    // useEffect(() => {
    //     let timer = setInterval(() => {
            
    //         setCount(count + 1)
    //         //闭包错误  useEffect 在第一次渲染时获取值为 0 的 count 后面没重新执行useEffect count一直为0

    //         // setCount(count => count + 1)
    //         // 读取新的count值
            
    //         // console.log(count);
    //     }, 1000)
    //     return () => clearInterval(timer)
    // },[])

    function delayCalculation(delay: number) {
        return delay/2
    }
    useInterval(() => {
        // console.log(count)
        setCount(count + 1)
    }, isRunning ? delay : null)

    // function handleDelayChange(e:ChangeEvent<HTMLInputElement>) {
    //     setDelay(Number(e.target.value))
    // }

    // function toggleRunning() {
    //     setIsRunning(!isRunning)
    // }

    const handleSubmit = useCallback(() => {
        console.log('useCallback' + delay);
        
    }, [delay])

    return (
        <div>
            <h1>{count}</h1>
            <Input type="text" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
            <Button onClick={() => setIsRunning(!isRunning)}>{isRunning ? '暂停': '开始'}</Button>
            <Button onClick={handleSubmit}>callback log</Button>
        </div>
    )
}

export default Counter

