import type { Component } from "solid-js"

interface ContentLineProps {
  lineCount: number,
  content: string,
  editable: boolean,
}

const ContentLine = (props: ContentLineProps) => {
  const { lineCount, content, editable } = props;
  let contentElement!: HTMLSpanElement;


  const disableEnter = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <div class="flex w-screen text-white px-14 py-2 hover:bg-zinc-800" onClick={() => { contentElement.focus() }}>
      <div class="pr-8">
        <h1>{lineCount}</h1>
      </div>
      <div class="w-100">
        <span contentEditable={editable} class="w-100 focus:outline-none height-full inline-block" ref={contentElement} onKeyPress={disableEnter}>{content}</span>
      </div>
    </div>
  );
}

export default ContentLine;
