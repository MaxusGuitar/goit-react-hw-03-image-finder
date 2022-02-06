import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Seacrhbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import { API } from "./services/API";

//import FindContact from "./FindContact";
//import shortid from "shortid";
//import style from "./App.css";

class App extends Component {
  state = {
    showModal: false,
    pictureName: "",
    picture: [],
    loading: false,
  };

  componentDidUpdate(prewProps, prewState) {
    if (prewState.pictureName !== this.state.pictureName) {
      API(this.state.pictureName).then((result) => {
        console.log(result);
        this.setState((prewState) => {
          return {
            picture: [...prewState.picture, result],
          };
        });
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  render() {
    const { showModal, pictureName, picture } = this.state;
    const { handleFormSubmit, toggleModal } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        <API pictureName={pictureName} />
        {showModal && <Modal onClose={toggleModal} />}
        <ImageGallery picture={picture} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
