import Carousel from 'react-bootstrap/Carousel';

function Carousel_comp() {
  return (
    <div class='carousel-div'>

<Carousel fade>
      <Carousel.Item>
        <img
          className="c-img d-block w-100"
          src="https://karnatakatourism.org/wp-content/uploads/2020/06/P10-gallery.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="c-img d-block w-100"
          src="https://media.istockphoto.com/id/533189605/photo/lotus-temple.jpg?s=612x612&w=0&k=20&c=80qOUefmx6cToVSuSo7ZmokP_A2_pKApt5dlN4nIDKA="
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3 >Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="c-img d-block w-100"
          src="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Gateway-Of-India_600-1280x720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </div>

    
  );
}

export default Carousel_comp;