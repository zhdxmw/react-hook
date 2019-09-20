import React, {useState, useMemo, useDebugValue} from 'react'
import {Button, Input} from 'antd'

export default function useMemoDemo() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('aa');

    // function expensive() {
    //     console.log('compute');
    //     let sum = 0;
    //     for (let i = 0; i < count * 10; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }


    // 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。

    const expensive = useMemo(() => {
        console.log('useMemo compute');
        let sum = 0;
        for (let i = 0; i < count * 10; i++) {
            sum += i;
        }
        return sum;
    },[count])

    return <div>
        {/* <h4>{count}-{val}-{expensive()}</h4> */}
        <h4>{count}-{val}-{expensive}</h4>
        <Button onClick={() => setCount(count + 1)}>+ count</Button>
        <Button onClick={() => setCount(count - 1)}>- count</Button>
        <Input value={val} onChange={event => setVal(event.target.value)}/>
    </div>
}

/*
function mountMemo<T>(
  nextCreate: () => T,
  deps: Array<mixed> | void | null,
): T {
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function updateMemo<T>(
  nextCreate: () => T,
  deps: Array<mixed> | void | null,
): T {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    // Assume these are defined. If they're not, areHookInputsEqual will warn.
    if (nextDeps !== null) {
      const prevDeps: Array<mixed> | null = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
*/