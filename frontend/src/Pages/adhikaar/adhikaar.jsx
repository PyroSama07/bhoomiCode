import { Fragment, useState } from "react";
import styles from "./adhikaar.module.css";
import adhikaarImage from "../../assets/GDSC-hack.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://34.126.213.168:1306";

const Adhikaar = () => {
  const [view, setView] = useState("add");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const endpoint = view === "add" ? "/addValue" : "/deleteValue";
    try {
      await axios.post(baseURL + endpoint, formData);
      toast.success("Request sent successfully."); // Show success toast
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error("Error sending request."); // Show error toast
    }
  };

  const handleSync = async () => {
    try {
      await axios.post(baseURL + "/sync");
      toast.success("Sync request sent successfully."); // Show success toast
    } catch (error) {
      console.error("Error sending sync request:", error);
      toast.error("Error sending sync request."); // Show error toast
    }
  };

  return (
    <Fragment>
      <ToastContainer /> {/* ToastContainer component for displaying toasts */}
      <div className={styles.navbar}>
        <button
          id="switch"
          onClick={() => handleViewChange("add")}
          className={view === "add" ? styles.active : ""}
        >
          Add Value
        </button>
        <button
          id="switch"
          onClick={() => handleViewChange("delete")}
          className={view === "delete" ? styles.active : ""}
        >
          Delete Value
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.loginform}>
          <form className={styles.formm} onSubmit={handleSubmit}>
            {view === "add" && (
              <Fragment>
                <label htmlFor="add">Enter Pincode</label>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter Pincode"
                  min="0"
                  inputMode="numeric"
                />
                <label htmlFor="seller">Enter Merchant I.D.</label>
                <input
                  type="number"
                  id="seller"
                  name="seller"
                  placeholder="Enter Seller ID"
                  min="0"
                  inputMode="numeric"
                />
                <label htmlFor="value">Enter Value</label>
                <input
                  type="number"
                  id="value"
                  name="value"
                  placeholder="Enter Value to add"
                  min="0"
                  inputMode="numeric"
                />
              </Fragment>
            )}
            {view === "delete" && (
              <Fragment>
                <label htmlFor="add">Enter Pincode</label>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter Pincode"
                  min="0"
                  inputMode="numeric"
                />
                <label htmlFor="seller">Enter Merchant I.D.</label>
                <input
                  type="number"
                  id="seller"
                  name="seller"
                  placeholder="Enter Seller ID"
                  min="0"
                  inputMode="numeric"
                />
              </Fragment>
            )}
            <button type="submit" value="Submit">
              Confirm
            </button>
            <button type="button" onClick={handleSync}>
              Sync Changes
            </button>
          </form>
        </div>
        <div className={styles.image}>
          <img src={adhikaarImage} alt="adhikaarImage" />
        </div>
      </div>
    </Fragment>
  );
};

export default Adhikaar;
