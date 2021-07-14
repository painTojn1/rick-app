import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";
import { Link } from "react-router-dom";

const RicksList = () => {
  //const { id } = props;
  //const [ricks, setRicks] = useState([]);

  const [all, setAll] = useState([]);

  useEffect(() => {
    //   axios
    //     .get(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10`)
    //     .then((res) => {
    //       console.log(res.data[1].name);
    //       setRicks(res.data);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });

    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        setAll(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-3">
        {/* {ricks.map((rick, idx, arr) => (
        <Character id={rick.id} image={rick.image}>
          {rick.name}
          <button>BTN</button>
        </Character>
      ))} */}

        {all.map((rick) => (
          <Link to={`/characters/${rick.id}`}>
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
    </div>
  );
};

export default RicksList;
