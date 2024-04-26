import type { Component } from "solid-js";
import Header from "./components/Header";
import { createStore } from "solid-js/store"
import ContentLine from "./components/ContentLine";

type ContentLine = {
  index: number,
  content: string,
  editable: boolean,
}

const App = () => {
  const [content, setContent] = createStore<ContentLine[]>([]);

  const addContent = (line: number) => {
    setContent([...content, {
      index: line + 1,
      content: "",
      editable: true,
    }]);
  };

  return (
    <>

      <main class="mt-8">
        <ContentLine lineCount={0} content="Eyd's Portfolio" editable={false} />
        <ContentLine lineCount={1} content="Hello World" editable={false} />
        <ContentLine lineCount={2} content="" editable={true} />
      </main>

    </>
  );
};

export default App;
