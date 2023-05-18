import { api } from "../../api/api.js"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext.jsx"
import style from "./style.module.css"

export function MainFeed(){
  const navigate = useNavigate()
  const [country, setCountry] = useState([])
  const {loggedInUser, setLoggedInUser} = useContext(AuthContext)

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
  
  function handleLogout() {
    setLoggedInUser("");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }
  
  return (<>
  <nav className={style.navBar}> 
    <Link to="/create-post"><button>CREATE POST</button></Link>
    <button onClick={handleLogout}>LOGOUT</button>
  </nav>
      {country.map((currentElement)=>{
        return <>
        <div className={style.countryBox}>
        <Link to={`/countries-post/${currentElement._id}`}><img src={currentElement.flag}/></Link>
        <h1><strong>{currentElement.name}</strong></h1>
        <p>{currentElement.continent}</p>
        </div>
        </>
      })}
   

  </>
  )
}
