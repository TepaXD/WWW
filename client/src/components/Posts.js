import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './functions/Post';
import { Container, Row, Col } from 'react-grid-system';
import Form from 'react-bootstrap/Form';
import axios from './functions/axios';

class Posts extends React.Component {
	state = {
		posts: [],
		filtered_posts: [],
		new_post: '',
		new_author: '',
		filter: '',
	};

	constructor(props) {
		super(props);
		this.handlePostChange = this.handlePostChange.bind(this);
		this.handlePostSubmit = this.handlePostSubmit.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	async componentDidMount() {
		this.getPosts();
	}

	async getPosts() {
		//const url = 'http://localhost:9000/posts';
		const url = 'http://avoback-avocado.rahtiapp.fi/posts';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ posts: data });
		this.filterPosts(this.state.posts);
		this.forceUpdate();
	}

	filterPosts(posts) {
		let filter = this.state.filter;
		let filtered_posts_temp = [];
		if (filter == null || filter !== '') {
			filtered_posts_temp = posts.filter(function(el) {
				return el.name.includes(filter);
			});
			this.setState({ filtered_posts: filtered_posts_temp });
		} else {
			this.setState({ filtered_posts: posts });
		}
	}

	handleAuthorChange(e) {
		this.setState({ new_author: e.target.value });
	}

	handlePostChange(e) {
		this.setState({ new_post: e.target.value });
	}

	handleFilterSubmit(e) {
		e.preventDefault();
		this.filterPosts(this.state.posts);
	}

	handleFilterChange(e) {
		this.setState({ filter: e.target.value });
	}

	async handlePostSubmit(e) {
		const newpost = {
			name: this.state.new_author,
			post: this.state.new_post,
		};
		await axios.post('/posts', { post: newpost });
		e.preventDefault();
		this.getPosts();
	}

	render() {
		const max_char = 50;
		const max_char_auth = 20;
		const current_char = this.state.new_post.length;
		const current_char_auth = this.state.new_author.length;
		return (
			<div className="body">
				<div className="bg">
					<div className="container">
						<div className="row">
							<div className="col">
								<Container className="message-container-background">
									<Row className="Row">
										<Col className="post-form-filter">
											<Form className="form-container-filter" onSubmit={this.handleFilterSubmit}>
												<Form.Group>
													<input
														type="text"
														className="post-auth"
														placeholder="Filter"
														onChange={this.handleFilterChange}
													/>
												</Form.Group>

												<input type="submit" className="submitbtn" value="Filter posts" />
											</Form>
										</Col>
										<Col className="post-form">
											<Form className="form-container" onSubmit={this.handlePostSubmit} id="form">
												<Form.Group>
													<input
														placeholder="Username"
														className="post-auth"
														maxLength="20"
														onChange={this.handleAuthorChange}
													></input>
												</Form.Group>
												<Form.Group>
													<textarea
														placeholder="Post"
														className="postfield"
														maxLength="50"
														onChange={this.handlePostChange}
													></textarea>
													<Form.Text className="text-muted">
														Post: {current_char} / {max_char} | Username:{' '}
														{current_char_auth} / {max_char_auth}
													</Form.Text>
												</Form.Group>
												<input type="submit" value="Create post" className="submitbtn"></input>{' '}
											</Form>
										</Col>
									</Row>
									<div className="message-container">
										<div className="message-grid">
											{!this.state.filtered_posts ? (
												<NewPost author="Loading author..." message="Loading posts..." />
											) : (
												this.state.filtered_posts.map(post => (
													<NewPost author={post.name} message={post.post} />
												))
											)}
										</div>
									</div>
								</Container>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Posts;
