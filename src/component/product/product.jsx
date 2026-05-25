import { data } from "../../data/data";
import "./product.css";
import ProductCard from "./product_card";

const Product = () => {

  console.log(data);

  return (
    <div>
      <div className="product_main_container">
        <div className="product_container">
          {data.map((item, index) => {
            console.log(item, "indivisual items");
            return (
              <ProductCard
                key={index + 1}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            );
          })}
          {/* <ProductCard
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <ProductCard
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <ProductCard
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <ProductCard
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <ProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVP0UuuZDY-vrQ0Dij83mp9Myr15OR8AOTQ&s"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <ProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVP0UuuZDY-vrQ0Dij83mp9Myr15OR8AOTQ&s"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
