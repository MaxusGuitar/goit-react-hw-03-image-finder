import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Seacrhbar";
import ImageGallery from "./components/ImageGallery";

import { getAPI } from "./services/API";

//import FindContact from "./FindContact";
//import shortid from "shortid";
import style from "./App.css";

class App extends Component {
  state = {
    pictureName: "",
    picture: [],
    loading: false,
  };

  componentDidUpdate(prewProps, prewState) {
    if (prewState.pictureName !== this.state.pictureName) {
      this.setState({ loading: true });
      getAPI(this.state.pictureName)
        .then((result) => {
          this.setState((prewState) => {
            return {
              picture: [...prewState.picture, ...result],
            };
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  render() {
    const { loading, picture } = this.state;
    const { handleFormSubmit } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />

        {loading && <div>Loading...</div>}
        <ImageGallery picture={picture} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
