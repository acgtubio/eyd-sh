import { JSX, createSignal, type Component } from "solid-js"
import { useLines } from "../stores/global/lines"

interface ContentLineProps {
  lineCount: number,
  content: string,
  editable: boolean,
}

const ContentLine = (props: ContentLineProps) => {
  const { lineCount, content, editable } = props;
  const { lineContent, toggleEditable, addEmpty } = useLines();
  const [lineValue, setLineValue] = createSignal<string>(content);
  let contentElement!: HTMLSpanElement;


  const disableEnter = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      console.log(lineCount);
      toggleEditable(lineCount);
      addEmpty(lineCount);
    }
  }

  const updateValue: JSX.EventHandlerUnion<HTMLSpanElement, InputEvent> = (e) => {
    setLineValue(e.currentTarget.textContent);
  }

  const updateCaretPosition = (e) => {
    console.log(window.getSelection());
  }

  return (
    <div class="flex w-screen text-white px-14 py-2 hover:bg-zinc-800 active:bg-zinc-800" onClick={() => { contentElement.focus() }}>
      <div class="pr-8">
        <h1>{lineCount}</h1>
      </div>
      <div class="w-100 flex">
        <span
          contentEditable={editable}
          class="focus:outline-none height-full inline-block"
          ref={contentElement}
          onKeyPress={disableEnter}
          onInput={updateValue}
          onClick={updateCaretPosition}
        >
          {content}
        </span>

        {
          editable && false &&
          <div>
            <span class="">{lineValue()}</span>
            <div class="bg-white w-2.5 h-5 "></div>
            <span class="">{lineValue()}</span>
          </div>
        }
      </div>
    </div >
  );
}

export default ContentLine;
