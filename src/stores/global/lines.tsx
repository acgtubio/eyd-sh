import { createStore, produce } from "solid-js/store";
import { createContext, useContext } from "solid-js";

const LinesContext = createContext();

type ContentLine = {
	index: number,
	content: string,
	editable: boolean,
}

type LineStore = {
	lines: ContentLine[],
	selectedLine: number | null,
}

export function LinesProvider(props) {
	const [content, setContent] = createStore<LineStore>({
		lines: [
			{
				index: 0,
				content: 'Eyd\'s Portfolio',
				editable: false,
			},
			{
				index: 1,
				content: 'Hello World',
				editable: false,
			},
			{
				index: 2,
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

	const updateContent = (lineNumber: number, content: string) => {
		setContent('lines', lineNumber,
			produce((line) => {
				console.log(content);
				line.content = content;
			})
		)
	};

	const addEmpty = (lineNumber: number) => {
		setContent('lines', lineNumber + 1, {
			index: lineNumber + 1,
			content: '',
			editable: true
		});
	}

	const updateSelectedLine = (lineNumber: number) => {
		setContent('selectedLine', lineNumber);
	}

	return (
		<LinesContext.Provider
			value={{ content, toggleEditable, addEmpty, updateContent, updateSelectedLine }}
		>
			{props.children}
		</LinesContext.Provider>
	)

}

export function useLines() {
	return useContext(LinesContext);
}
