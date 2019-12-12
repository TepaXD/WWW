import React from 'react';
import { Col } from 'react-grid-system';
function NewPost({ author, message }) {
	return (
		<Col className="message">
			<div className="post_auth">
				<h2 className="poster">@{author}</h2>
				<br />
				<p className="post">{message}</p>
			</div>
		</Col>
	);
}

export default NewPost;
