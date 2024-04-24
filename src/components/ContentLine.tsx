import type { Component } from "solid-js"

interface ContentLineProps {
  lineCount: number,
  content: string,
  isSelected: boolean,
}
const ContentLine = (props: ContentLineProps) => {
  const { lineCount, content, isSelected } = props;

  return (
    <div class="flex w-screen text-white px-14 py-2 hover:bg-zinc-800">
      <div class="pr-8">
        <h1>{lineCount}</h1>
      </div>
      <div class="w-100">
        <span>{content}</span>
      </div>
    </div>
  );
}

export default ContentLine;
