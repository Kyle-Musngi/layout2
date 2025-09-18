import "./App.css";

//top section
function TopBoxLarge() {
  return <div className="box large"></div>;
}

function TopBoxNested() {
  return (
    <div className="box nested">
      <TopBoxNestedinner name="Lance Kyle"/>
      <TopBoxNestedinner name="Musngi"/>
    </div>
  );
}

function TopBoxNestedinner(props) {
  return <div className="inner-box">{props.name}</div>;
}


function Header() {
  return (
    <div className="section top">
      <TopBoxLarge />
      <TopBoxNested />
      <TopBoxLarge />
    </div>
  );
}

//Middle section
function MiddleBoxTall() {
  return <div className="box tall"></div>;
}

function MiddleBoxMid() {
  return <div className="box mid"></div>;
}

function MiddleCol() {
  return (
    <div className="col">
      <MiddleBoxMid />
      <MiddleBoxMid />
    </div>
  );
}

function Body() {
  return (
    <div className="section middle">
      <MiddleBoxTall />
      <MiddleCol />
    </div>
  );
}

//Bottom section
function BottomBoxWide() {
  return <div className="box wide"></div>;
}

function BottomBoxSmall(props) {
  return <div className="box small">{props.text}</div>;
}

function Footer() {
  return (
    <div className="section bottom">
      <BottomBoxWide />
      <BottomBoxSmall text="C-PCIT9"/>
      <BottomBoxSmall text="IT3A"/>
      <BottomBoxWide />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;