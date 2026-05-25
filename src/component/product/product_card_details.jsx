import { getProductById } from "../../data/data";
import "./product_card_details.scss";
const ProductCardDetails = () => {
  const product = getProductById(Number(3));
  console.log("product", product);

  return (
    <>
      <div className="productCard_mainContainer">
        <div className="container">
          <div className="img_container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzPL1loJgxV0jWHLkHOT0-aVfZakLu6w7dg&s"
              alt="image"
            />
          </div>
          <div className="content_conatiner">
            <h1>Shoes</h1>
            <h2>$150</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              nemo.
            </p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
