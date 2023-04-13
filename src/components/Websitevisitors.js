import {useState} from 'react';

function Counter(){
  console.log('useStae -', useState)
  //const countState = useState(0);
  //const count = countState[0];
  //const setCount = countState[1];

  const [count, setCount] = useState(0)

  const handleIncrement = () =>{
    setCount(count + 1)
  }

  return (
    <div>
    <h4> Website Visitors: {count} </h4>
   
    </div>
  )
}

export default Counter