import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //user가 버튼을 클릭한다.
  //counter+1해서 1이된다.
  //setState함수를 호출을 해야한다.
  //console.log가 실행되는 대 변수값은 1로 보이고 값은 아직 안변헀기 때문에 그전의 값이 보인다.
  //함수끝
  //App 다시 renender
  //let count=0 을 거치면서 count값은 다시  0으로  초기화한다.
  //State값은 없데이트가 되면서 다시 랜더를 한다.
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "counter2 state", counter2);
  };

  useEffect(() => {
    console.log("useEffect free");
  }, []);
  return (
    <>
      <div>good!{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </>
  );
}
export default App;
