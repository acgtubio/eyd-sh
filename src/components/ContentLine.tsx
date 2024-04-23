import type { Component } from "solid-js"

interface ContentLineProps {
  lineCount: number,
  content: string,
  isSelected: boolean,
}
const ContentLine = (props: ContentLineProps) => {
  const { lineCount, content, isSelected } = props;

  return (
    <div>
      <div>
        <h1>{lineCount}</h1>
      </div>
      <div>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default ContentLine;
