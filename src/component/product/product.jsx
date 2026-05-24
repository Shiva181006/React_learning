import "./product.css";
import Product from "./product_card";
const App = () => {
  const data = [
    {
      title: "Happy birds",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "200",
    },
    {
      title: "Owl",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "150",
    },
    {
      title: "Pegin",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "300",
    },
    {
      title: "Parrot",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "180",
    },

    {
      title: "Crow",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "40",
    },
    {
      title: "Peacock",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/27/19/14/bird-787103_960_720.jpg",
      price: "280",
    },
  ];
  console.log(data);

  return (
    <div>
      <div className="product_main_container">
        <div className="product_container">
          {data.map((item, index) => {
            console.log(item, "indivisual items");
            return (
              <Product
                key={index + 1}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            );
          })}
          {/* <Product
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
          /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
