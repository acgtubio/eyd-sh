import { useLines } from "~/stores/lines";
import { For, createEffect } from "solid-js";
import ContentLine from "./ContentLine";

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
