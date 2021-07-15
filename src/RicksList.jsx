import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import useRickAndMortyAPI from "./useRickAndMortyAPI";

const RicksList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [timer, setTimer] = useState(null);
  const query = { path: "character", id: null, page: 1 };
  const [data, setPageNumber] = useRickAndMortyAPI(query);
  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  const searchHandler = (value) => {
    timer && clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setSearchValue(value.toLowerCase());
      console.log(value);
    }, 300);
    setTimer(newTimer);
  };

  return (
    <div className="mx-auto">
      <Filter onValueChange={searchHandler} />
      <div className="grid grid-cols-3">
        {data
          .filter((value) => value.name.toLowerCase().includes(searchValue))
          .map((rick) => (
            <Link to={`/characters/${rick.id}`} key={rick.id}>
              <Character
                id={rick.id}
                image={rick.image}
                name={rick.name}
                status={rick.status}
                species={rick.species}
                origin={rick.origin.name}
                location={rick.location.name}
              ></Character>
            </Link>
          ))}
      </div>
      <button
        className="font-mono text-gray-100"
        onClick={() => setPageNumber((num) => num - 1)}
      >
        Hello
      </button>
      <br />
      <button
        className="font-mono text-gray-100"
        onClick={() => setPageNumber((num) => num + 1)}
      >
        Hello
      </button>
    </div>
  );
};

export default RicksList;
