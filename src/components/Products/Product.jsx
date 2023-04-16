import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        navigate('not-found');
        throw new Error('something bad happened');
      }
      const data = await response.json();
      setUser(data);
    })();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <div>
      <div>{user?.name}</div>
    </div>
  );
};
export default Product;
