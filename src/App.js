import "./App.css";
import HeaderComponent from "./components/header"
import HomePageComponent  from "./components/home-page";
function App() {
  return (
    <>
      <header className="flex justify-center">
        <HeaderComponent></HeaderComponent>
      </header>
      <main>
          <HomePageComponent></HomePageComponent>
      </main>
    </>
  );
}

export default App;
