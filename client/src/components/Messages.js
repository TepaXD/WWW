import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewPost from "./functions/Post";
import { Container, Row, Col } from "react-grid-system";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

class Message extends React.Component {
  state = {
    posts: [],
    filtered_posts: [],
    author: "",
    new_post: ""
  };

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  storeFetch = () => {
    this.setState({ author: useSelector(state => state.username) });
  };

  async componentDidMount() {
    const url = "http://localhost:9000/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ posts: data });
    this.filterPosts(this.state.posts);
  }

  filterPosts(posts) {
    let author = "";
    let filtered_posts_temp = [];
    if (author == null || author !== "") {
      filtered_posts_temp = posts.filter(function(el) {
        return el.name.includes(author);
      });
      this.setState({ filtered_posts: filtered_posts_temp });
    } else {
      this.setState({ filtered_posts: posts });
    }
  }

  handlePostChange(e) {
    this.setState({ new_post: e.target.value });
  }

  render() {
    const max_char = 50;
    const current_char = this.state.new_post;
    return (
      <div className="bg">
        <Container className="message_container">
          <Col className="new_post">
            <Form className="form_container">
              <Form.Group>
                <Form.Control
                  placeholder="Username"
                  className="usernamefield"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  placeholder="Post"
                  className="postfield"
                  maxLength="50"
                  onChange={this.handlePostChange}
                ></Form.Control>
                <Form.Text className="text-muted">
                  Remaining characters: {max_char-current_char.length}
                </Form.Text>
              </Form.Group>
			<button onClick={e => alert("moi")}>Submit new post</button>
            </Form>
          </Col>
          {!this.state.filtered_posts ? (
            <NewPost author="Waiting for posts..." message="" />
          ) : (
            this.state.filtered_posts.map(post => (
              <NewPost author={post.name} message={post.post} />
            ))
          )}
        </Container>
      </div>
    );
  }
}

export default Message;
