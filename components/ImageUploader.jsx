import Styles from "../styles/ImageUploader.module.css"
 import { useState } from "react";
import DragDrop from "./DragDrop";
const ImageUploader = () => {
  const [data, setData] = useState("")
  return (
      <div className={Styles.container}>
          <div className={Styles.wrapper}>
              <section className={Styles.heading}>
              <h1>Upload your image</h1>
              <p>File should be jpeg,png...</p>    
              </section>
              <DragDrop/>
              <span>Or</span>
        <input type="file" className={Styles.chooseFile} placeholder="choose a file" name="file"
          onChange={e =>setData(e.target.value)} />
          </div>
          
    </div>
  )
}

export default ImageUploader