import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './functions/Post';
import { Container, Row, Col } from 'react-grid-system';
import { useSelector } from 'react-redux';

class Message extends React.Component {
	state = {
		posts: [],
		filtered_posts: [],
		author: '',
	};

	storeFetch = () => {
		this.setState({ author: useSelector(state => state.username) });
		console.log(this.state.author);
	};

	async componentDidMount() {
		const url = 'http://localhost:9000/posts';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ posts: data });
		this.filterPosts(this.state.posts);
	}

	filterPosts(posts) {
		let author = 'te';
		let filtered_posts_temp = [];
		if (author == null || author !== '') {
			filtered_posts_temp = posts.filter(function(el) {
				return el.name.includes(author);
			});
			this.setState({ filtered_posts: filtered_posts_temp });
		} else {
			this.setState({ filtered_posts: posts });
		}
	}

	render() {
		return (
			<Container className="message_container">
				{!this.state.filtered_posts ? (
					<NewPost author="Waiting for posts..." message="" />
				) : (
					this.state.filtered_posts.map(post => <NewPost author={post.name} message={post.post} />)
				)}
			</Container>
		);
	}
}

export default Message;
