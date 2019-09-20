import React, { useRef, MutableRefObject,useImperativeHandle, forwardRef } from 'react'
import {Button, Input} from 'antd'

function TextInputWithFocusButton(props:any, ref:any) {
    const inputEl: MutableRefObject<any> = useRef(null);

    // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，
    // 应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用：
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputEl.current.focus()
      }
    }))

    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      console.log(inputEl);
      
      inputEl.current.focus();
    };
    return (
      <>
        <Input ref={inputEl} type="text" />
        <Button onClick={onButtonClick}>Focus the input</Button>
      </>
    );
  }

  export default forwardRef(TextInputWithFocusButton)

/*
  本质上，useRef 就像是可以在其 .current 属性中保存一个可变值的“盒子”。

  useRef 会在每次渲染时返回同一个 ref 对象。

  当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。
  如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。
  应用场景 1 绑定dom节点
    2 实例对象
*/