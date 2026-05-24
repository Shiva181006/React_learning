import "./product.css";
const Product = ({ image, title, price, description }) => {
  return (
    <div>
      <div className="card">
        <img src={image} alt="Photo " />
        <div className="title">{title}</div>
        <h3 className="price">${price}</h3>
        <p className="lorem">{description}</p>
        <button className="button">Click Me</button>
      </div>
    </div>
  );
};

export default Product;
