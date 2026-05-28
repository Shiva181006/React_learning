import { useParams } from "react-router";
import { getProductById } from "../../data/data";
import "./product_card_details.scss";

const ProductCardDetails = () => {
  
  const { id } = useParams(); //Fetch id from the url(Route)
  const product = getProductById(Number(id));

  return (
    <>
      <div className="productCard_mainContainer">
        <div className="container">
          <div className="img_container">
            <img src={product[0].inner_image[1]} />
          </div>
          <div className="content_conatiner">
            <h1>{product[0].title}</h1>
            <h2>${product[0].price}</h2>
            <p>{product[0].description}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
