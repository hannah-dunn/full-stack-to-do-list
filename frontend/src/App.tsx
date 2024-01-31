// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("Vite + React");

//   useEffect(() => {
//     fetch("http://localhost:8080/hello")
//       .then((res) => res.text()) // but use res.json for data, this is only cos im using a string
//       .then((data) => setMessage(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <>
//       <h1>{message}</h1>
//     </>
//   );
// }

// export default App;

import ReactDOM from "react-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;

// import { createRoot } from "react-dom/client";
// import Home from "./components/Home";

// const container = document.getElementById("app");
// const root = createRoot(container);

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// root.render(<App />);
