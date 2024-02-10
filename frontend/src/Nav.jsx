import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
};

const linkStyle = {
  marginRight: "10px",
  textDecoration: "none",
  color: "black",
  backgroundColor: "aliceblue",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "16px",
  transition: "color 0.3s ease",
  ":hover": {
    color: "blue",
  },
};

export const Nav = () => {
  return (
    <div style={navStyle}>
      <Link to="/buyer" style={linkStyle}>
        Buyer
      </Link>
      <Link to="/seller" style={linkStyle}>
        Seller
      </Link>
    </div>
  );
};
