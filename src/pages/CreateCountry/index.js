/*import { useState } from "react";

const [img, setImg] = useState("");

function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }



 await api.post("/user/signup", { ...form, img: imgURL });




  const imgURL = await handleUpload();
  
  
  
  
  <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} />
  
  
  */