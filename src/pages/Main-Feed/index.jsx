import { api } from "../../api/api.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export function MainFeed(){
  
  const [country, setCountry] = useState([])
  console.log(country)


  useEffect(()=>{
    async function fetchCountry(){
      try{
        const response = await api.get("/countries/")

        setCountry([...response.data])
      }catch(e){
        console.log(e)
      }
    }
    fetchCountry()
    
  }, [])
  
  
  return (<>
  <nav>
    <button>My feed</button>{" "}
    <Link to="/create-post"><button>Create a post</button></Link>
  </nav>
      {country.map((currentElement)=>{
        return <>
        <Link to={`/countries-post/${currentElement._id}`}><img src={currentElement.flag}/></Link>
        <h1><strong>{currentElement.name}</strong></h1>
        <p>{currentElement.continent}</p>
        </>
      })}
   

  </>
  )
}
