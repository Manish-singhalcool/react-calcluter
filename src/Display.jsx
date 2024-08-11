import styles from  "./Display.module.css"
const Display = ({DisplayVal}) =>{
  return <input type="text" className={styles.display}  value={DisplayVal} readOnly/>;
}

export default Display;