import "./App.css";import _ from "lodash";

const App = ({ name }) => {
    return `<h1>Welome, ${name}</h1>
    ${_.join(["welcome", name], " ")}
    `;
}

export default App;