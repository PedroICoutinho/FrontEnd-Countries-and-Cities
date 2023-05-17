import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";


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

  return (

    <form onSubmit={handleSubmit}>
      <label>Country:</label>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label >Flag:</label>
      <input type="file" id="formImg" onChange={handleImage} />

      <label>Continent:</label>
      <input 
        name="continent"
        type="text"
        value={form.continent}
        onChange={handleChange}
      />
      
      <button
        type="submit"
        className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
      text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600"
      >
        Post
      </button>
    </form>


  )

  
  
  
  
  
  
} 