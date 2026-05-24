import "./product.css";
import Product from "./product_card";
const App = () => {
  return (
    <div>
      <div className="product_main_container">
        <div className="product_container">
          <Product
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Product
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Product
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Product
            image="https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVP0UuuZDY-vrQ0Dij83mp9Myr15OR8AOTQ&s"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVP0UuuZDY-vrQ0Dij83mp9Myr15OR8AOTQ&s"
            title="Happy Bird"
            price="500"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default App;
