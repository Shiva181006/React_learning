import "./hero.css"
const Hero = () => {
  return (
    <div>
      <div className="main_container1">
        <div className="container1">
          <div className="box_container">
            <div className="review">
              <h4>Customer Review</h4>
            </div>
            <div className="content">
              <h2> <b>We <u>make</u> your <br />product <u>BEautiful</u> <br /> and <u>smart</u></b> </h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum.</h3>
            </div>
            <div className="button">
              
              <button className="button1">Let's talk</button>
              <button className="button2"><u>View showreel</u></button>
              
            </div>
            <div className="states">

            </div>
          </div>
          <div className="img_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTa--M-LC5fqIIIA8j04uH8sIrYyc9r1eq2A&s" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
