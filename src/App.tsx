import type { Component } from "solid-js";
import Header from "./components/Header";
import ContentLine from "./components/ContentLine";

const App: Component = () => {


  return (
    <>
      <Header />

      <main>
        <ContentLine lineCount={0} content="Hello World" isSelected={false} />
      </main>
    </>
  );
};

export default App;
