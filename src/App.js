import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "./components/Seacrhbar";
import Modal from "./components/Modal";

//import FindContact from "./FindContact";
//import shortid from "shortid";
//import style from "./App.css";

class App extends Component {
  state = {
    showModal: false,
    pictureName: "",
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const API_KEY = "24079663-849aadf309a059b421030ae2f";
  //   fetch(
  //     "https://pixabay.com/api/?q=cat&page=1&key=" +
  //       API_KEY +
  //       "&image_type=photo&orientation=horizontal&per_page=12"
  //   )
  //     .then((res) => res.json())
  //     .then((photo) => this.setState({ photo }))
  //     .then(console.log)
  //     .finally(() => this.setState({ loading: false }));
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {showModal && <Modal onClose={this.toggleModal} />}
        {/* {this.state.loading && <h2>Load</h2>}
        {this.state.photo && (
          <ul className="gallery">
            <li className="gallery-item">
              <img src="{this.state.photo.q}" alt="" />
            </li>
          </ul>
        )} */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
