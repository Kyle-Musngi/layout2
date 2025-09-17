import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top Section */}
      <div className="section top">
        <div className="box large"></div>
        <div className="box nested">
          <div className="inner-box"></div>
          <div className="inner-box"></div>
        </div>
        <div className="box large"></div>
      </div>

      {/* Middle Section */}
      <div className="section middle">
        <div className="box tall"></div>
        <div className="col">
          <div className="box mid"></div>
          <div className="box mid"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="section bottom">
        <div className="box wide"></div>
        <div className="box small"></div>
        <div className="box small"></div>
        <div className="box wide"></div>
      </div>
    </div>
  );
}

export default App;