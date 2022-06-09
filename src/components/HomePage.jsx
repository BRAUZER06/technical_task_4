import React from "react";
import { instance } from "../instance";
import { pagination as Pagination } from "./Pagination";
import Cart from "./Cart";

import "../App.css";

const HomePage = () => {
  const [fetchPosts, setFetchPosts] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [numberPagination, setNumberPagination] = React.useState(0);

  //контролируемый инпут
  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);

    //поиск при нажатии на Enter
    if (event.key === "Enter") {
      onClickButtonSearch();
    }
  };
  //кнопка Найти
  const onClickButtonSearch = () => {
    try {
      instance
        .get(`posts/search?q=${inputValue}`)
        .then((resp) => setFetchPosts(resp.data));
    } catch (error) {
      console.log(error);
      alert("ошибочкаааа");
    }
  };

  //отслеживание цифры пагинации
  const onClickButtonPagination = (event) => {
    setNumberPagination(Number(event.target.outerText));
  };

  React.useEffect(() => {
    (() => {
      try {
        instance
          .get(`posts?limit=10&skip=${numberPagination}`)
          .then((resp) => setFetchPosts(resp.data));
      } catch (error) {
        console.log(error);
        alert("ошибочкаааа");
      }
    })();
  }, [numberPagination]);

  React.useEffect(() => {
    (() => {
      setLoading(true);
      try {
        instance.get("/posts?limit=10").then((res) => setFetchPosts(res.data));
      } catch (error) {
        console.log(error);
        alert("ошибочкаааа");
      }
      setLoading(false);
    })();
  }, []);
  return (
    <div className="homePage">
      <div className="homePage__searchContainer">
        <input
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={onChangeInputValue}
          className="homePage__searchContainer_input"
          type="text"
          placeholder="Введите текст..."
        />
        <button
          onClick={onClickButtonSearch}
          className="homePage__searchContainer_button"
        >
          Найти
        </button>
      </div>

      <div className="homePage__pagination">
        <Pagination
          onClickButtonPagination={onClickButtonPagination}
          total={fetchPosts.total}
          limit={fetchPosts.limit}
        />
      </div>

      <Cart loading={loading} fetchPosts={fetchPosts} />
    </div>
  );
};

export default HomePage;
