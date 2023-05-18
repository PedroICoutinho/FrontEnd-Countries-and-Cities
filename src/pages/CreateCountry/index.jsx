import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import style from "./style.module.css"

export function CreateCountry(){
const navigate = useNavigate()

const[form, setForm] = useState({
  name:"",
  flag:"",
  continent:""
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
      await api.post("/countries/create-country", { ...form, flag: imgURL });

      navigate("/main-feed");
    } catch (error) {
      console.log(error);
    }
  }

  return (<>
    <nav className={style.navBar}>
      <Link to="/main-feed"><button>FEED</button></Link>
    </nav>   
    <form onSubmit={handleSubmit}>
      <label>Country:</label>
      <input
      className={style.boxInput}
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label >Flag:</label>
      <input type="file" id="formImg" onChange={handleImage} />

      <label>Continent:</label>
      <input 
        className={style.boxInput}
        name="continent"
        type="text"
        value={form.continent}
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