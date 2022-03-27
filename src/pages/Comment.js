import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_URI = process.env.REACT_APP_API_URI;

export class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      userId: Number(""),
      flightId: Number([]),
      tags: "",
      newCommentAdded: false,
    };
  }

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddComment = (event) => {
    event.preventDefault();
    const newComment = { ...this.state };

    this.setState({
      newCommentAdded: "on process",
    });
    axios
      .post(`${API_URI}/api/comments`, newComment)
      .then(() => {
        console.log("a comment has been added", newComment);
        this.setState({ newCommentAdded: true });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { comment, userId, flightId, tags, newCommentAdded } = this.state;
    return (
      <>
        <Navbar />
        <main className="comment">
          {newCommentAdded === "on process" && (
            <p className="comment-p ">
              Your comment is being added to the list. Thank you.
              <span role="img" aria-label="plane">
                ✈️
              </span>
            </p>
          )}
          {newCommentAdded === true && (
            <div className="comment-div">
              <p className="comment-p">
                Your comment has been <strong>successfully added</strong>
                <span role="img" aria-label="plane">
                  ✈️
                </span>
              </p>
              <button className="comment-button">
                <Link to="/">Go to Home Page</Link>
              </button>
              <button className="comment-button">
                <Link to="/comment">Add a New Comment</Link>
              </button>
            </div>
          )}
          {newCommentAdded === false && 
            <form className="comment-form">
              <label htmlFor="comment" className="comment-form-label">
                Comment
              </label>
              <br></br>
              <input
                type="text"
                id="comment"
                name="comment"
                value={comment}
                onChange={this.handleInput}
                className="comment-form-input"
                autoComplete="off"
                required
              />
              <br></br>
              <label htmlFor="userId" className="comment-form-label">
                UserId
              </label>
              <br></br>
              <input
                type="number"
                id="userId"
                name="userId"
                value={userId}
                onChange={this.handleInput}
                className="comment-form-input"
                autoComplete="off"
                required
              />
              <br></br>
              <label htmlFor="flightId" className="comment-form-label">
                FlightId
              </label>
              <br></br>
              <input
                type="number"
                id="flightId"
                name="flightId"
                value={flightId}
                onChange={this.handleInput}
                className="comment-form-input"
                autoComplete="off"
                required
              />
              <br></br>
              <label htmlFor="tags" className="comment-form-label">
                Tags
              </label>
              <br></br>
              <input
                type="text"
                id="tags"
                name="tags"
                value={tags}
                onChange={this.handleInput}
                className="comment-form-input"
                autoComplete="off"
              />
              <br></br>

              <button
                type="submit"
                className="comment-button"
                onClick={this.handleAddComment}
              >
                Leave a comment
              </button>
            </form>
          }
        </main>
      </>
    );
  }
}

export default NewComment;
