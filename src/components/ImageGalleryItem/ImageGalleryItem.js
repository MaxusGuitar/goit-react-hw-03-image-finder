import React from "react";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ p }) {
  return (
    <li className="gallery-item">
      <img src={p.webformatURL} alt={p.tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
