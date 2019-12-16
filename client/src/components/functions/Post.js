import React from 'react';

//Creates a new post-element that is returned to 'Posts'
function NewPost({ author, message, id, time }) {
	return (
		<div className="message" key={id}>
			<h2 className="poster">@{author}</h2>
			<br />
			<p className="post">{message}</p>
			<p className="time">{time}</p>
		</div>
	);
}

export default NewPost;
