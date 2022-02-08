import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Seacrhbar";
import ImageGallery from "./components/ImageGallery";
import Loading from "./components/Loading";
import LoadBtn from "./components/LoadBtn";
import { getAPI, page } from "./services/API";

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
      this.setState({ loading: true, picture: [] });
      getAPI(this.state.pictureName)
        .then((result) => {
          // console.log(this.state.error.status);
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

  loadMoreBtn = () => {
    return page + 1;
  };

  render() {
    const { loading, picture } = this.state;
    const { handleFormSubmit, loadMoreBtn } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {loading && <Loading />}
        <ImageGallery picture={picture} />
        <ToastContainer autoClose={3000} />
        <LoadBtn more={loadMoreBtn} />
      </div>
    );
  }
}

export default App;
