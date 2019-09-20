import { useEffect, useRef } from 'react'

function useInterval(Callback: Function, delay: number |null){

    const savedCallback:any = useRef();

    useEffect(() => { 
        savedCallback.current = Callback
    })
   
    
    useEffect(() => {
        function tick() {
            console.log('callback Effect');
            
            savedCallback.current();
        }
        
        if (delay) {
            console.log('set new Interval Effect');
            
            let timer = setInterval(tick, delay);
            
            //有些副作用可能需要清除，所以需要返回一个函数 在 unmounting 的时候清除
            return () => clearInterval(timer)
        }
    }, [delay])
}

export default useInterval