import { JSX, createEffect, createSignal, type Component } from "solid-js"
import { ContentType, useLines } from "../stores/global/lines"
import Command, { isCommand } from "../commands/commands"
import { Switch, Match } from "solid-js"

interface ContentLineProps {
  lineCount: number,
  content: string,
  editable: boolean,
  type: ContentType,
}

const ContentLine = (props: ContentLineProps) => {
  const { content, toggleEditable, addEmpty, updateTextContent, updateSelectedLine, addCommandResultContent } = useLines();
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

    const content = contentElement.textContent || "";

    toggleEditable(props.lineCount);

    if (isCommand(content)) {
      addCommandResultContent(props.lineCount, {
        name: "ls",
        url: "test",
        description: "string",
      });
      addEmpty(props.lineCount + 1)
      return;
    }

    addEmpty(props.lineCount);
    updateTextContent(props.lineCount, contentElement.textContent);
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
    if (props.type === ContentType.Command)
      return;
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
        <Switch>

          <Match when={props.type === ContentType.Text}>
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
          </Match>

          <Match when={props.type === ContentType.Command}>
            <Command name={props.content.name} />
          </Match>

        </Switch>
      </div>
    </div >
  );
}

export default ContentLine;
