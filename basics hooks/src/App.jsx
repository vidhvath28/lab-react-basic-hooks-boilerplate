import UseHooks from "./components/useHooks";
// import context from "./components/context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyContext.Provider value="The sun rose over the horizon, casting a warm glow over the fields. The birds chirped as they flitted from tree to tree, searching for breakfast. In the distance, a farmer could be seen tending to his crops, his weathered face creased in concentration. A cool breeze blew, carrying the scent of freshly cut grass and wildflowers. It was a peaceful scene, one that made you feel grateful to be alive. As you took it all in, you couldn't help but feel a sense of wonder at the beauty of nature and the world around you. It was a reminder that there was still so much to explore and discover in this vast and wondrous universe.">
        <UseHooks />
      </MyContext.Provider>
    </div>
  );
}

export default App;