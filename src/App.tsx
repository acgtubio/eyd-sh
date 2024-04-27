import type { Component } from "solid-js";
import Header from "./components/Header";
import { useLines } from "./stores/global/lines";
import Content from "./components/Content";
import { LinesProvider } from "./stores/global/lines";

const App = () => {

  return (
    <>

      <main class="mt-8">
        <LinesProvider>
          <Content />
        </LinesProvider>
      </main>

    </>
  );
};

export default App;
