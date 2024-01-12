import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Hammy",
                animal: "Hamster",
                breed: "Golden Hamster"
            }),
            React.createElement(Pet, {
                name: "Cuddles",
                animal: "Hamster",
                breed: "Golden Hamster"
            }),
            React.createElement(Pet, {
                name: "Buster",
                animal: "Dog",
                breed: "Collie cross"
            }),
        ]
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));