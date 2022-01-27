import React, { Component } from "react";
import Searchbar from "./components/Seacrhbar";
import Modal from "./components/Modal";
//import FindContact from "./FindContact";
//import shortid from "shortid";
//import style from "./App.css";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar />
        <button type="submit" onClick={this.toggleModal}>
          OPEN MODAL
        </button>
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
