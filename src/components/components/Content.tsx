import ContentLine from "./ContentLine";
import { useLines } from "../stores/global/lines";
import { For, createEffect } from "solid-js";

const Content = () => {
  const { content, addEmpty, toggleEditable, updateContent, updateSelectedLine } = useLines();

  return (
    <>
      <For each={content.lines}>
        {(line, i) => {
          return <ContentLine lineCount={line.index} content={line.content} editable={line.editable} type={line.type} />
        }}
      </For >
    </>
  );
}

export default Content;
