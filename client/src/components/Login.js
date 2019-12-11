import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class LoginPage extends React.Component {
	render() {
		return (
			<Container fluid style>
				<Row justify="center">
					<Col xs={3} debug>
						Login
						<br />
						Username
						<br />
						Password
					</Col>
				</Row>
			</Container>
		);
	}
}
