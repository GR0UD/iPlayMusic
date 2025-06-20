import { useRoutes } from "react-router-dom";
import routes from "~react-pages";

function App() {
  const element = useRoutes(routes);

  return (
    <>
      {/* Global SVG gradient definition */}
      <svg width='0' height='0' style={{ position: "absolute" }}>
        <defs>
          <linearGradient id='dock-gradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#EE0979' />
            <stop offset='100%' stopColor='#FF6A00' />
          </linearGradient>
        </defs>
      </svg>

      {element}
    </>
  );
}

export default App;
