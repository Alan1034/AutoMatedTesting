import React, { Component } from "react";
import { Button } from "@/components/ui/button"
import { Link } from "react-router";
class App extends Component {
    render() {

        return (
            <div>
                <h1>Hello, World!</h1>
                <Link
                    to={{
                        pathname: "/form",
                        search: "?query=string",
                    }}
                >
                    <Button variant="outline" >Go to Form</Button>
                </Link>

            </div>
        );
    }
}

export default App;