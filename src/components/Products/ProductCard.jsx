import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name }) => {
  return (
    <Link to={String(id)} key={id}>
      {name}
    </Link>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
};
