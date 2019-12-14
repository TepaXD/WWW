import React from 'react';
function NewPost({ author, message }) {
	return (
		<div className="message">
			<h2 className="poster">@{author}</h2>
			<br />
			<p className="post">{message}</p>
		</div>
	);
}

export default NewPost;
