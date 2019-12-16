import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap/';
import { Container, Row, Col } from 'react-grid-system';
import './styles/About.css';

//View that's behind 'About'
class About extends Component {
	render() {
		return (
			<div className="body">
				<div className="bg">
					<Container className="bg-scroll">
						<Row>
							<Col className="info">
								<p>
									The avocado (Persea americana), a tree with probable origin in south-central
									Mexico,[2][3][4] is classified as a member of the flowering plant family
									Lauraceae.[2] The fruit of the plant, also called an avocado (or avocado pear or
									alligator pear), is botanically a large berry containing a single large seed.[5]
									Avocados are commercially valuable and are cultivated in tropical and Mediterranean
									climates throughout the world.[2] They have a green-skinned, fleshy body that may be
									pear-shaped, egg-shaped, or spherical. Commercially, they ripen after harvesting.
									Avocado trees are partially self-pollinating, and are often propagated through
									grafting to maintain predictable fruit quality and quantity.[6] In 2017, Mexico
									produced 34% of the world supply of avocados.
								</p>
								<p className="info-footer">Wikipedia: Avocado</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<Carousel className="carousel">
									<CarouselItem>
										<div className="carousel-inner">
											<img src="./assets/avocado1.jpg" className="carousel-img"></img>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="carousel-inner">
											<img src="./assets/avocado2.jpg" className="carousel-img"></img>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="carousel-inner">
											<img src="./assets/avocado3.png" className="carousel-img"></img>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="carousel-inner">
											<img src="./assets/avocado4.jpg" className="carousel-img"></img>
										</div>
									</CarouselItem>
									<CarouselItem>
										<div className="carousel-inner">
											<img src="./assets/avocado5.jpg" className="carousel-img"></img>
										</div>
									</CarouselItem>
								</Carousel>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default About;
