import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import style from "./style.module.css"

export function CreateCity(){
const navigate = useNavigate();
const {countryId} = useParams();


const[form, setForm] = useState({
  name:"",
  population:"",
  img:""
}); 

const [img, setImg] = useState("");

function handleChange(e) {
  setForm((currentState) => {
    return { ...currentState, [e.target.name]: e.target.value };
  });
}


function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/uploadImage", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post(`/cities/${countryId}`, { ...form, img: imgURL });

     navigate(`/countries-post/${countryId}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (<>
    <div className={style.navBar}>
      <Link to="/main-feed"><button>FEED</button></Link>
    </div>   

    <form onSubmit={handleSubmit}>
      <label>City:</label>
      <input
       className={style.boxInput}
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label >City photo:</label>
      <input type="file" id="formImg" onChange={handleImage}/>

      <label>Population:</label>
      <input 
       className={style.boxInput}
        name="population"
        type="text"
        value={form.population}
        onChange={handleChange}
      />
      
      <button
        type="submit"
        className={style.buttonSend}
      >
        Post
      </button>
    </form>
    </>

  )

  
  
  
  
  
  
} 