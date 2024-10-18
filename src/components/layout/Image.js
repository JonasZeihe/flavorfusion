import React from "react";
import PropTypes from "prop-types";

/**
 * Simple Image component for rendering images in your case study screens.
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alt text for the image (for accessibility).
 * @param {string} className - Optional CSS classes for custom styling.
 */
const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

// PropTypes for basic type checking
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Default props for optional values
Image.defaultProps = {
  className: "",
};

export default Image;
