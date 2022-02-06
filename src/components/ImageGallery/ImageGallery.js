import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

export default function ImageGallery({ picture }) {
  return (
    <ul className="gallery">
      {picture.length > 0 &&
        picture.map((p) => {
          return <ImageGalleryItem key={p.id} p={p} />;
        })}
    </ul>
  );
}

ImageGallery.propTypes = {
  picture: PropTypes.array,
};
