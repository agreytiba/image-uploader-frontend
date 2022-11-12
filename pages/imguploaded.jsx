import Image from "next/image"
import Styles from "../styles/Uploaded.module.css"

const Uploaded = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
         <Image src="/success.png" height={35} width={35} className={Styles.successIcon} />
        <h3>Uploaded Successfully!</h3>
        <section className={Styles.uploadedImg}>
          <Image src="/homepage.png" height={224} width={338} />
        </section>
          <section className={Styles.imgLink}>
              <p>image link</p>
              <button>copy</button>
          </section>
          </div>
    </div>
  )
}

export default Uploaded