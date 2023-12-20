import React from "react";
import ReactDOM from "react-dom/client";

// React Element -
const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

// React Element using jsx - 
const Title =() => (
    <h1 id="heading">
        Namaste React Using JSX
    </h1>
);

// React Components-
//  Class Based Component (OLD)
//  Functional Component (NEW)


// React Functional Component
// when we compose one component into another component then it is known as component compositon
const HeadingComponent = () => (
    <div>
        <Title/> {/* we can compose functional component as Title is composed */}
        {heading} {/*way to compose React element into funcional compnent*/}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element rendering is done like this
// root.render(jsxHeading);

// React Functional Component is rendered like
root.render(<HeadingComponent/>);
