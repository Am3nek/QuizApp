import styles from "./button.module.css"

function Button(){
    const style = {
        backgroundColor: "#535bf2",
        color:"#ffffff",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
    }
    return (
        //style={style} for inline style
        <button className={styles.button} >Click me!</button>
    )
}

export default Button;