import React from "react";
import Header from "../Components/Header/Header";
import Movie from "../Components/Movie/Movie";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getTop250 } from "../redux/actions/actions";
import MainPage from "../Components/MainPage/MainPage";

function MainPageContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTop250(1));
  }, []);

  return <MainPage />;
}

export default MainPageContainer;
