"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/apiSlice";
import { RootState } from "../../store";

const HomePage = () => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch<any>();
  const { data, loading, error } = useSelector((state: RootState) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const myData = JSON.stringify(data);
  const myNewData = JSON.parse(myData);
  //   setListData(myNewData);

  const myList =
    myNewData &&
    myNewData.map((list: any) => {
      <div key={list.id}>
        <h2 className="text-red-500">{list.title}</h2>
      </div>;
    });

  return (
    <div>
      <h1>Data from API:</h1>
      <h2>My Name is nothing</h2>
    </div>
  );
};

export default HomePage;
