// // import { useEffect, useMemo, useState } from "react"
// // function App() {
// //   const [counter,setCounter] = useState(0);
// //   const [sum,setSum] = useState(1);

// //   let count = useMemo(() =>{
// //     let count = 0;
// //     for(let i=1;i<=sum;i++)
// //     {
// //       count = count + i;
// //     }

// //     return count;  
// //   },[sum])

  

// //   return (
// //     <div>

// //       <input type="text" onChange={(e) =>{
// //         setSum(e.target.value)
// //       }}></input>

// //       <h3>Sume from 1 to {sum} is = {count} </h3>

// //       <button onClick={()=>{
// //         setCounter(counter+1);
// //       }}>Counter ({counter}) </button>

// //     </div>
// //   )
// // }

// // export default App


// import { useEffect, useMemo, useState } from 'react'

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, [])

//   const cryptoReturns = useMemo(() =>{
//     return  exchange1Data.returns + exchange2Data.returns;
//   },[exchange1Data,exchange2Data])
  
//   let incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App


import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App