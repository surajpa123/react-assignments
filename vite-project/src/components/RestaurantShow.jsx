import axios from "axios"
import React, { useState } from "react"
import style from "../components/res.css"

export const RestaurantShow = ()=>{
const [data,setdata] = useState([])
const [count,setcount] = useState(5)
const [payments,setpayments] = useState("cash")
React.useEffect(()=>{
    getData()
},[count,payments])
    const getData = ()=>{
    axios.get("http://localhost:8080/getres",{
        params:{
            _page : 1,
            _limit: 5,
            ratings:count,
        }
    }).then(function(res){
       setdata(res.data)
       console.log(data)
    })
    }

  const handelPayment = ()=>{
      let Alld = [...data];
      Alld = Alld.filter((el)=>{
          if(el.payment_methods == "cash"){
              return el.payment_methods
          }
      })

      setdata(Alld)
      console.log(Alld)
  }
  const handelPayment2 = ()=>{
    let Alld = [...data];
    Alld = Alld.filter((el)=>{
        if(el.payment_methods == "card"){
            return el.payment_methods
        }
    })
    setdata(Alld)
    console.log(Alld)
}


    const handelSortsecond = (value)=>{
         setcount(value)
         console.log(count)
    }

    const handelSort = ()=>{
        const sortdata = [...data]
       sortdata.sort(function(a,b){
           return a.costForTwo - b.costForTwo
       })
       setdata(sortdata)
    }
    const handelSor2 = ()=>{
        const sortdata = [...data]
        sortdata.sort((a,b)=>(
       b.costForTwo - a.costForTwo
    )
)
 setdata(sortdata)
console.log("sort",data)
    }

const getall = ()=>{
    axios.get("http://localhost:8080/getres").then(function(res){
       setdata(res.data)
    })
}

    return(
        <div className="main">
<button onClick={()=>handelSortsecond(1)}>1 Star</button>
<button onClick={()=>handelSortsecond(2)}>2 Star</button>
<button onClick={()=>handelSortsecond(3)}>3 Star</button>
<button onClick={()=>handelSortsecond(4)}>4 Star</button>
<button onClick={()=>handelSortsecond(5)}>5 Star</button>
<button onClick={()=>{handelPayment()}}>Cash</button>
<button onClick={()=>{handelPayment2()}}>Card</button>
<button onClick={()=> getall()}>All</button>
<button onClick={()=>handelSort()}>Asc</button>
<button onClick={()=>handelSor2()}>Dsc</button>
   {data.map((el) => (
  <div>{el.id} 
  <img src={el.image} alt="" />
  <div></div>
  <div>
  <h3>Name - {el.name}</h3>
 <p>Cost for two - {el.costForTwo}</p>
 <p>Accepts - {el.payment_methods}</p>
 <p>Ratings - {el.ratings}</p>
 <p>Votes - {el.votes}</p>
 <p>Reviews - {el.reviews}</p>
  </div>
 
  </div>
  
   ))}

        </div>
      
    )





}