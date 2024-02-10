import { Fragment, useState } from "react";
import styles from "./check.module.css";
import adhikaarImage from "../../assets/GDSC-hack.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://localhost:1305";

const Check = () => {
  const [pincode, setPincode] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!pincode.trim()) {
      toast.error("Please fill in the pincode.");
      return;
    }

    try {
      let response;
      if (sellerId.trim()) {
        response = await axios.get(`${baseURL}/value/${pincode}/${sellerId}`);
      } else {
        response = await axios.get(`${baseURL}/seller/${pincode}`);
      }
      setResult(response.data);
      toast.success("Query successful.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred during query.");
    }
  };

  const handleClear = () => {
    setPincode("");
    setSellerId("");
    setResult(null);
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.loginform}>
          <form className={styles.formm} onSubmit={handleSubmit}>
            <label htmlFor="pincode">Insert Pincode *</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <label htmlFor="seller_id">Insert Merchant I.D.</label>
            <input
              type="number"
              id="seller_id"
              name="seller_id"
              placeholder="Enter Seller ID"
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
            />
            <button type="submit" value="Submit">
              Confirm
            </button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
        <div className={styles.image}>
          <img src={adhikaarImage} alt="adhikaarImage" />
        </div>
      </div>
      {result && (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Seller ID</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {typeof result === "object" ? (
                Object.entries(result).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Result</td>
                  <td>{result}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default Check;
