import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import { Pagination } from '../components/Pagination/Pagination.jsx';
import { SearchContext } from '../App.js';

export const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /* const [categoryId, setCategoryId] = useState(0); */
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    console.log(id);
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sort = sortType.sort.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://66abc9cdf009b9d5c7305643.mockapi.io/items?page=1&limit=4&${category}&sortBy=${sort}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  const pizzaz = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort
            value={sortType}
            onClickSort={(i) => {
              setSortType(i);
            }}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzaz}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
