//import PersonList from "./PersonList";
import RicksList from "./RicksList";
import React, { useState, useEffect } from "react";
import Unit from "./Unit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";

export default function App() {
  //return <RicksList />;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* <Redirect to="/characters" /> */}
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route path="/characters/:id">
          <Units />
        </Route>
        <span className="font-mono text-6xl text-red-700">
          <Route>404</Route>
        </span>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <span className="font-mono text-2xl text-white">
      <Link to="/characters">Go to characters list</Link>
    </span>
  );
}

function Characters() {
  return (
    <div>
      <ul>
        <li className="font-mono text-2xl text-white">
          <Link to="/">Go back to home page</Link>
        </li>
      </ul>
      <RicksList />
    </div>
  );
}

function Units() {
  const params = useParams();

  const [character, setUnit] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => {
        setUnit(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  return (
    <div>
      <Unit
        id={params.id}
        name={character?.name}
        status={character?.status}
        species={character?.species}
        type={character?.type}
        gender={character?.gender}
        origin={character?.origin.name}
        location={character?.location.name}
        image={character?.image}
      />
      <p className="font-mono text-2xl text-white">
        <Link to="/characters">Go back to characters list</Link>
      </p>
    </div>
  );
}
