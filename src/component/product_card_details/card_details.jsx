const Card_details = ({ image, title, price, description}) => {
  return (
    <div>
      <div className="container">
        <div className="img_container">
          <img src={image} />
        </div>
        <div className="content_conatiner">
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card_details;
