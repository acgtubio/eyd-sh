import type { Component } from "solid-js";
import Header from "./components/Header";
import ContentLine from "./components/ContentLine";

const App: Component = () => {


  return (
    <>
      <Header />

      <main class="mt-8">
        <ContentLine lineCount={0} content="Eyd's Portfolio" editable={false} />
        <ContentLine lineCount={1} content="Hello World" editable={false} />
        <ContentLine lineCount={2} content="" editable={true} />
      </main>
    </>
  );
};

export default App;
