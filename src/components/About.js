import UserClass from "./UserClass"
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Mounted");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is namaste react web series</h2>
    
                <UserClass name="Kartik Pratap" location="Dhampur, Uttar Pradesh" />
            </div>
        );
    }
}

export default About;