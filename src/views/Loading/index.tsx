import {memo} from 'react'
import {LoginWrapper} from "./style";

const Loading = memo(()=>{
    return (
        <LoginWrapper>
            <h1 className="log-msg">Loading</h1>
        </LoginWrapper>
    )
})

export default Loading