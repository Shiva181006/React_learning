import { useParams } from "react-router";
import { card_detail_data } from "../../data/data";
import "./product_card_details.scss";

import Card_details from "./card_details";

const ProductCardDetails = () => {
  // const product = getProductById(Number(3));
  // console.log("product", product);
  console.log("details", card_detail_data);

  const { id } = useParams();

  console.log(id);

  const singleProduct = card_detail_data.find((item) => item.id === Number(id));

  return (
    <>
      <div className="productCard_mainContainer">
        <div className="container">
          <Card_details
            image={singleProduct.image}
            title={singleProduct.title}
            price={singleProduct.price}
            id={singleProduct.id}
            description={singleProduct.description}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
