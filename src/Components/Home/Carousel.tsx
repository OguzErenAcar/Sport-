import Carousel from 'react-bootstrap/Carousel'; 

function Carousel_() {
  return ( 
    <Carousel className='carousel'>
      <Carousel.Item className='carouselItem'>
       <img alt="" src="https://img.freepik.com/free-vector/abstract-sport-background-flat-style_23-2148220193.jpg"/>
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
       <img alt="" src="https://img.freepik.com/free-vector/abstract-sport-background-flat-style_23-2148220193.jpg"/>
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
       <img alt="" src="https://img.freepik.com/free-vector/abstract-sport-background-flat-style_23-2148220193.jpg"/>
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  );
}
 

export default Carousel_;
