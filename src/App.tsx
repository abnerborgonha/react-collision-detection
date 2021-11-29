import { useCallback, useEffect, useRef } from "react";

import "./App.css";
import Box, { IBoxHandles } from "./components/Box";
import handleCollisionDetected from "./utils/handleCollisionDetected";

function App() {
  const element1 = useRef<IBoxHandles>(null);
  const element2 = useRef<IBoxHandles>(null);

  const validateElements = useCallback(() => {
    const element1Rect = element1.current?.getBoundingClientRect();
    const element2Rect = element2.current?.getBoundingClientRect();

    const isColliding = handleCollisionDetected({
      element1Rect,
      element2Rect,
    });

    console.log({ isColliding });

    if (isColliding) {
      element1.current?.handleVisible(false);
    } else {
      element1.current?.handleVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", validateElements);

    return () => {
      window.removeEventListener("resize", validateElements);
    };
  }, [validateElements]);

  return (
    <div className="App">
      <Box name="Elemento 1" ref={element1} />
      <Box name="Elemento 2" ref={element2} />
    </div>
  );
}

export default App;
