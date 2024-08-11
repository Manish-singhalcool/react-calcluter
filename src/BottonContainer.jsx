import styles from  "./BottonContainer.module.css"
const BottonContainer = ({onButtonClick}) => {
 
    const bottonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return  (
            <div  className={styles.buttonsContainer}>
                {bottonName.map((bottonValue) => (
                    <button className={styles.button}  onClick={() => onButtonClick(bottonValue)} >{bottonValue} </button>
                ))}
            </div>
    );
};

export default BottonContainer ;