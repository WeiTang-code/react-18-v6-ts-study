import CounterWrapper from "views/counter/style";
import {memo} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "views/counter/store/counterSlice";


const Counter = memo(() => {
        const count = useSelector((state: any): any => state.counter.value)
        const dispatch = useDispatch()
        return (
            <CounterWrapper>
                <h2>this is the counter page!</h2>
                <span>count: {count}</span>
                <br/>
                <br/>
                <button onClick={() => dispatch(increment())}>count自增</button>
                &nbsp;&nbsp;
                <button onClick={() => dispatch(decrement())}>count自减</button>
            </CounterWrapper>
        )
    }
)

export default Counter