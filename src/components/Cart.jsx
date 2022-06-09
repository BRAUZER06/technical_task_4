import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ fetchPosts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        {fetchPosts.posts?.map((item) => (
          <li
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              cursor: "pointer",
            }}
            key={item.id}
          >
            <Link to={`post${item.id}`}>
              <p>{item.title}</p>
              <br />
              <p>{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
