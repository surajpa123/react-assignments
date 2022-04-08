import axios from "axios"
import React, { useState } from "react"
import style from "../components/res.css"

export const RestaurantShow = ()=>{
const [data,setdata] = useState([])
const [filter,setFilter] = useState([])
React.useEffect(()=>{
    getData()
    // handelSort()
    // handelSor2()
},[])
    const getData = ()=>{
    axios.get("http://localhost:8080/getres").then(function(res){
        
       setdata(res.data)
       console.log(data)
    })
    }

 const handelCard = ()=>{
     const sortdata = [...data]
     if(sortdata.payment_methods[card] == true){
        setdata(sortdata)
     }
 }

    const handelSort = ()=>{
        const sortdata = [...data]
       sortdata.sort(function(a,b){

           return a.ratings - b.ratings

       })
       setdata(sortdata)
        console.log("sort",data[0].payment_methods)
    }
    const handelSor2 = ()=>{
        const sortdata = [...data]
        sortdata.sort((a,b)=>(
       b.ratings - a.ratings
    )
)
 setdata(sortdata)
console.log("sort",data)
    }

    const handelSort2 = ()=>{
        const sortdata = [...data]
     if(sortdata[0].payment_methods.card == true)
        console.log("yes",data)
    }
    return(
        <div className="main">
{/* <button onClick={()=>handelSort1()}>1 Star</button>
<button onClick={()=>handelSort2()}>2 Star</button>
<button onClick={()=>handelSort()}>3 Star</button>
<button onClick={()=>handelSort4()}>4 Star</button>
<button onClick={()=>handelSort()}>5 Star</button>
<button onClick={()=>handelCard()}>Card</button>
<button>Cash</button>
<button>All</button> */}
<button onClick={()=>handelSort()}>Asc</button>
<button onClick={()=>handelSor2()}>Dsc</button>

   {data.map((el) => (
  <div>{el.id} 
  <img src={el.image} alt="" />
  <div></div>
  <div>
  <h3>Name - {el.name}</h3>
 <p>Cost for two - {el.costForTwo}</p>
 <p>Ratings - {el.ratings}</p>
 <p>Votes - {el.votes}</p>
 <p>Reviews - {el.reviews}</p>
  </div>
 
  </div>
  
   ))}

        </div>
      
    )





}