import React, { useState } from "react";
import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/Home";
function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="app transition-all ease-in">
            <Home />
            <Canvas />
            <Customizer />
        </main>
    );
}

export default App;
