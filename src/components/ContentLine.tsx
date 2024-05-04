import { JSX, createEffect, createSignal, type Component } from "solid-js"
import { useLines } from "../stores/global/lines"

interface ContentLineProps {
  lineCount: number,
  content: string,
  editable: boolean,
}

const ContentLine = (props: ContentLineProps) => {
  const { content, toggleEditable, addEmpty, updateContent, updateSelectedLine } = useLines();
  const [lineValue, setLineValue] = createSignal<string>(props.content);
  const [focused, setFocused] = createSignal<boolean>(false);
  let contentElement!: HTMLSpanElement;

  const disableEnter = (e: KeyboardEvent) => {
    if (e.key != 'Enter') {
      return;
    }
    e.preventDefault();

    if (contentElement.textContent === "") {
      return;
    }

    toggleEditable(props.lineCount);
    addEmpty(props.lineCount);
    updateContent(props.lineCount, contentElement.textContent);
  }

  const updateValue: JSX.EventHandlerUnion<HTMLSpanElement, InputEvent> = (e) => {
    setLineValue(e.currentTarget.textContent);
  }

  const updateCaretPosition = (e) => {
    console.log(window.getSelection());
  }

  const onContentClick = () => {
    updateSelectedLine(props.lineCount);
    focusOnContent();
  }

  const focusOnContent = () => {
    contentElement.focus()
    setFocused(content.selectedLine === props.lineCount);
  }

  createEffect(() => {
    focusOnContent();
  });

  return (
    <div
      class={`flex w-screen text-white px-14 py-2 hover:bg-zinc-500 ${focused() ? "bg-zinc-800" : ""}`}
      onClick={onContentClick}
    >
      <div class="pr-8">
        <h1>{props.lineCount}</h1>
      </div>
      <div class="w-100 flex">
        <span
          contentEditable={props.editable}
          class="focus:outline-none height-full inline-block"
          ref={contentElement}
          onKeyPress={disableEnter}
          onInput={updateValue}
          onClick={updateCaretPosition}
          onFocusOut={() => setFocused(false)}
        >
          {props.content}
        </span>

        {
          props.editable && false &&
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
