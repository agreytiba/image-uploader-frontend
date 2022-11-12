import Styles from '../styles/DragDrop.module.css';
import {useRouter} from "next/router"
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import DropElement from './DropElement';

const fileTypes = [ 'JPG', 'PNG', 'GIF' ];

function DragDrop() {
  const [file, setFile] = useState(null);
  const router = useRouter()


  // handle drag and drop fucntion to direct user to another page
	const handleChange = (file) => {
  
   setFile(file)
    router.push("/imguploaded");
  
    
  };
 
  return <FileUploader
    handleChange={handleChange}
    name="file" types={fileTypes}
    children={<DropElement file={file} />}
    onDrop={(file) => console.log(file)}
  />;
}
export default DragDrop;
