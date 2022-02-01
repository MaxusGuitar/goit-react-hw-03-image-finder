import { Component } from "react";

export default class Searchapi extends Component {
  state = {
    picture: null,
  };

  componentDidUpdate(prewProps, prewState) {
    const prewName = prewProps.pictureName;
    const nextName = this.props.pictureName;
    const URL = `https://pixabay.com/api/`;
    const API_KEY = `24079663-849aadf309a059b421030ae2f`;

    if (prewName !== nextName) {
      fetch(
        `${URL}?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((picture) => this.setState(picture.hits))
        .then(console.log);
    }
  }

  render() {
    return (
      <div>
        {this.state.picture && (
          <ul className="gallery">
            {this.state.map((e) => (
              <li className="gallery-item">
                <img src={e.webformatURL} alt="" />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
