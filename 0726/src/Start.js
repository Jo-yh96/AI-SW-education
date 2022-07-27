import LoginButton from "./LoginButton"
import { useState } from "react"


const Start = () => {

    const [status, setStatus] = useState(false);

    const InComponet = () => {
        return(<div>반갑습니다</div>)
    }

    const buttonClick = () => {
        setStatus(true)
    }

    const MyPracProps = ({name,age}) => {
        return(
            <div>{name}님 안녕하세요. {age}입니다.</div>
        )
    }

    const MyPracProps2 = (props) => {
        let {name, age} = props
        return(
            <div>{name}님 안녕하세요. {age}입니다.</div>
        )
    }
    return (
        <div>
            안녕하세요
            <InComponet />
            {
                status ? (<></>) : (<><LoginButton data={buttonClick}/></>)
            }
            <MyPracProps name={"조영현"} age={27}/>
            <MyPracProps2 name={"조영현2"} age={29}/>
        </div>
    )
}

export default Start;