import { useState, useEffect } from "react";
import axios from "axios";

const useRickAndMortyAPI = ({ path, id, page }) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(page);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/${path}${id ? "/" + id : ""}`)
      .then((res) => {
        setData(page ? res.data.results : res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, page, path, pageNumber]);
  return [data, setPageNumber];
};

export default useRickAndMortyAPI;
