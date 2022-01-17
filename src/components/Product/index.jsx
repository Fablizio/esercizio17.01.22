import { useRef } from "react";
import styles from "./Product.module.scss"

function Product() {

    const ref = (element, direction) => {
        if (direction === "left") element.current.scrollLeft += 300;
        if (direction === "right") element.current.scrollLeft -= 300;
    }

    const carousel = useRef();

    return(
        <div className={styles.body} >
            <h1 className={styles.title}>Questo è un Ref di img</h1>
            <div className={styles.carouselS} ref={carousel}>
                <div className={styles.imgS}>
                    <div className={styles.imgRef}>
                        <img src="https://picsum.photos/id/238/200/300" alt="1" ></img>
                        <img src="https://picsum.photos/id/237/200/300" alt="2" ></img>
                        <img src="https://picsum.photos/id/236/200/300" alt="3" ></img>
                        <img src="https://picsum.photos/id/235/200/300" alt="4" ></img>
                        <img src="https://picsum.photos/id/234/200/300" alt="5" ></img>
                        <img src="https://picsum.photos/id/233/200/300" alt="6" ></img>
                        <img src="https://picsum.photos/id/232/200/300" alt="7" ></img>             
                        <img src="https://picsum.photos/id/231/200/300" alt="8" ></img>
                        <img src="https://picsum.photos/id/230/200/300" alt="9" ></img>
                    </div>
                </div>
            </div>
            <div className={styles.btnS}>
                <button className={styles.btn} onClick={() => ref(carousel, "right") }>{"<"}</button>
                <button className={styles.btn} onClick={() => ref(carousel, "left") }>{">"}</button>

            </div>
        </div>
    )

}

export default Product;