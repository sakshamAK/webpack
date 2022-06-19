import App from "./App.js";
import Logo from "./logo.svg";

const root = document.getElementById("root");
root.innerHTML = `
Hey! This is my own webpack application... And I am ${App({name: "saksham"})}
<img src="${Logo}" alt="build icon" />`;