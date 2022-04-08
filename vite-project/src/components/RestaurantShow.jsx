import axios from "axios"
import React, { useState } from "react"
import style from "../components/res.css"

export const RestaurantShow = ()=>{
const [data,setdata] = useState([])
const [count,setcount] = useState(5)
React.useEffect(()=>{
    getData()
    
},[count])
    const getData = ()=>{
    axios.get("http://localhost:8080/getres",{
        params:{
            _page : 1,
            _limit: 5,
            ratings:count,
            // payment_methods:"card"
            
        }
    }).then(function(res){
       setdata(res.data)
       console.log(data)
    })
    }

    const handelSortsecond = (value)=>{
         setcount(value)
        //  count = 0
         console.log(count)
    }


    

    // React.useEffect(() => {
    //     axios.get("http://localhost:8080/getres", {
    //       params:{
    //         _page : 1,
    //         _limit: 5,
    //         ratings:Ratings,
    //         Payment:"card"
    //       }
    //     }).then(res => setData(res.data));
    //        // console.log("new",data);
    //        console.log("rate",ratings)
    //    }, [])
       

    const handelSort = ()=>{
        const sortdata = [...data]
       sortdata.sort(function(a,b){
           return a.ratings - b.ratings
       })
       setdata(sortdata)
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

    return(
        <div className="main">
<button onClick={()=>handelSortsecond(1)}>1 Star</button>
<button onClick={()=>handelSortsecond(2)}>2 Star</button>
<button onClick={()=>handelSortsecond(3)}>3 Star</button>
<button onClick={()=>handelSortsecond(4)}>4 Star</button>
<button onClick={()=>handelSortsecond(5)}>5 Star</button>
{/* <button onClick={()=>handelCard()}>Card</button> */}
{/* <button>Cash</button>
<button>All</button>  */}
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