import React from 'react'
import Image from 'next/image'
import Styles from "../styles/DragDrop.module.css"
const DropElement = () => {

  return (
      <div className={Styles.wrapper}>
           <section className={Styles.imageSvg}>
          <Image src="/image.svg" height={200} width={200} />
      </section>
      <p>Drag & Drop your image here</p>
    </div>
  )
}

export default DropElement