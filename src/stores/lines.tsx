import { createStore, produce } from "solid-js/store";
import { createContext, useContext } from "solid-js";

const LinesContext = createContext();

type ContentLine = {
  index: number,
  content: string | CommandResult,
  type: ContentType,
  editable: boolean,
}

// TODO: Implement this to ContentLine.
type TextContent = {
  text: string,
  size: string,
}

type CommandResult = {
  name: string,
  url: string,
  description: string,
}

type LineStore = {
  lines: ContentLine[],
  selectedLine: number | null,
}

export enum ContentType {
  Text,
  Command
}

export function LinesProvider(props) {
  const [content, setContent] = createStore<LineStore>({
    lines: [
      {
        index: 0,
        type: ContentType.Text,
        content: 'Hello World',
        editable: false,
      },
      {
        index: 1,
        type: ContentType.Text,
        content: '',
        editable: true,
      }
    ],
    selectedLine: null
  });

  const toggleEditable = (lineNumber: number) => {
    setContent('lines', lineNumber,
      produce((line) => {
        line.editable = !line.editable
      })
    )
  };

  const updateTextContent = (lineNumber: number, content: string) => {
    setContent('lines', lineNumber,
      produce((line) => {
        line.content = content;
      })
    )
  };

  const addCommandResultContent = (lineNumber: number, content: CommandResult) => {
    setContent('lines', lineNumber + 1, {
      type: ContentType.Command,
      index: lineNumber + 1,
      content: content,
      editable: false
    });
  };

  const addEmpty = (lineNumber: number) => {
    setContent('lines', lineNumber + 1, {
      index: lineNumber + 1,
      type: ContentType.Text,
      content: '',
      editable: true
    });
    updateSelectedLine(lineNumber + 1);
  }

  const updateSelectedLine = (lineNumber: number) => {
    setContent('selectedLine', lineNumber);
  }

  return (
    <LinesContext.Provider
      value={{ content, toggleEditable, addEmpty, updateTextContent, updateSelectedLine, addCommandResultContent }}
    >
      {props.children}
    </LinesContext.Provider>
  )

}

export function useLines() {
  return useContext(LinesContext);
}
