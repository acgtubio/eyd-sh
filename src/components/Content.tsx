import ContentLine from "./ContentLine";
import { useLines } from "../stores/global/lines";
import { For } from "solid-js";

const Content = () => {
  const { content, addEmpty, toggleEditable } = useLines();


  return (
    <>
      <For each={content.lines}>{(line, i) => {
        console.log(line);
        return <ContentLine lineCount={line.index} content={line.content} editable={line.editable} />
      }
      }</For >
    </>
  );
}

export default Content;
