//import PersonList from "./PersonList";
import RicksList from "./RicksList";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return <RicksList />;
}
//{
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route path="/">
//             <Home />
//           </Route>
//           <Route path="/characters">
//             <Characters />
//           </Route>
//           <Route path="/characters/:id">
//             <About />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (App = () => <RicksList />);
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Characters() {
//   return <h2>Characters</h2>;
// }
