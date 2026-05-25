import { useNavigate } from "react-router";
import "./product.css";

const ProductCard = ({ image, title, price, description }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <img src={image} alt="Photo " />
        <div className="title">{title}</div>
        <h3 className="price">${price}</h3>
        <p className="lorem">{description}</p>
        <button className="button" onClick={() => navigate("/ProductCardDetails")}>Click Me</button>
      </div>
    </div>
  );
};

export default ProductCard;
