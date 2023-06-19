import "./styles.css";
import { useState } from "react";
export default function App() {
  const [selectedImage, setSelectedImage] = useState("./asset/img/ai.png");

  const onChangeFile = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (fileObj) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(fileObj);
    }
    console.log(fileObj);
    console.log(e.target.files[0]);
  };
  return (
    <div className="App">
      <div className="">
        <label htmlFor="file">
          <img htmlFor="file" alt="" src={selectedImage} />

          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            name="file"
            accept="image/*"
            onChange={(e) => {
              onChangeFile(e);
            }}
          />
          {/* 
          {selectedImage && <img src={selectedImage} alt="Selected" />}
          <input type="file" accept="image/*" onChange={onChangeFile} /> */}
        </label>
      </div>
    </div>
  );
}
