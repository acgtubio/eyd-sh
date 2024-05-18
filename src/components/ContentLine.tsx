import { JSX, createEffect, createSignal, type Component } from "solid-js"
import { ContentType, useLines } from "~/stores/lines"
import Command, { isCommand } from "../commands/commands"
import InvalidCommand from "~/commands/invalid"
import { Switch, Match } from "solid-js"

interface ContentLineProps {
  lineCount: number,
  content: string,
  editable: boolean,
  type: ContentType,
}

const ContentLine = (props: ContentLineProps) => {
  const { content, toggleEditable, addEmpty, updateTextContent, updateSelectedLine, addCommandResultContent, addError } = useLines();
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

    addError(props.lineCount, content);
    addEmpty(props.lineCount + 1);
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
    if (props.type !== ContentType.Text) {
      return;
    }
    focusOnContent();
  }

  const focusOnContent = () => {
    contentElement.focus()
    setFocused(content.selectedLine === props.lineCount);
  }

  createEffect(() => {
    if (props.type !== ContentType.Text)
      return;
    focusOnContent();
  });

  return (
    <div
      class={`flex w-screen text-white px-14 py-2 ${props.type === ContentType.Text && "hover:bg-zinc-500"} ${focused() ? "bg-zinc-800" : ""}`}
      onClick={onContentClick}
    >
      <div class="pr-5">
        <h1 class="text-xl">{props.type === ContentType.Text && "$"}</h1>
      </div>
      <div class={`w-100 flex ${props.type !== ContentType.Text && "my-2"}`}>
        <Switch fallback={<InvalidCommand command={props.content} />}>

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
