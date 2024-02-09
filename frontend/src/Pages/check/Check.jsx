import React, {Fragment} from "react";
import styles from "./check.module.css";
import adhikaarImage from "../../assets/GDSC-hack.png";

const Check = () => {
  return ( 
    <Fragment>
        <div className={styles.container}>  
            <div className={styles.loginform}>
                <form className={styles.formm}>
                    <label for="add">Insert Pincode</label>
                    <input type="text" id="add" name="add" placeholder="" />
                    <label for="delete">Insert Merchant  I.D.</label>
                    <input type="text" id="delete" name="delete" placeholder="" />
                    <button type="submit" value="Submit">Confirm</button>
                </form>
            </div>
            <div className={styles.image}>
                <img src={adhikaarImage} alt="adhikaarImage" />
            </div>
        </div>
    </Fragment>
 )
};

export default Check;