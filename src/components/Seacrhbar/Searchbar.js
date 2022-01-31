import React, { Component } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    pictureName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.pictureName.trim() === "") {
      //trim() - delete spaces
      alert("Please enter the picture name!");
      return;
    }

    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            type="text"
            name="pictureName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.pictureName}
            onChange={this.handleNameChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

export default Searchbar;
