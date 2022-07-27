import {useEffect, useRef, useState} from 'react'
import $ from "jquery";


function App() {
  // const [data, setData] = useState({
  //   email:"1",
  //   password:"1",
  //   name:"1"
  // });
  // const onChangeData = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]:e.target.value
  //   })
  // }; 
  // useEffect(() => {
  //   console.log(data);
  // },[data]); 

  // const [status, setStatus] = useState(false);

  // const eventButton = () => {
  //   setStatus(!status);
  // }

  // const PrracComponent = ({eventButton}) => {
  //   return (
  //     <div>
  //       <button onClick={eventButton}>버튼</button>
  //     </div>
  //   )
  // }


  const refInput = useRef();

  useEffect(() => { //->처음 렌더링될때 한번 실행
    // refInput.current.focus();
    $("#input1").focus();
  },[])
  return (
    <div className="App">
      {/* <input type="text" value={data.email} onChange={onChangeData} name="email" />이메일
      <br/>
      <input type="text" value={data.password} onChange={onChangeData} name="password" />페스워드
      <br/>
      <input type="text" value={data.name} onChange={onChangeData} name="name" />이름
      <br/>
      <br/>
      <br/>
      <div>
          <p>이메일 : {data.email}</p>
          <p>패스워드 : {data.password}</p>
          <p>이름 : {data.name}</p>
      </div> */}
      {/* <div>
        {
          status ? (<p>안녕하세요</p>) : (<></>)
        }
      </div>
      <PrracComponent eventButton={eventButton}/> */}
      <div>
        <input type={"text"} ref={refInput} id="input1"/>
      </div>
    </div>
  );
}

export default App;
