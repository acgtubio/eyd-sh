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
		]
	});

	const toggleEditable = (lineNumber: number) => {
		setContent('lines', lineNumber,
			produce((line) => {
				line.editable = !line.editable
			})
		)
	};

	const addEmpty = (lineNumber: number) => {
		console.log(lineNumber)
		setContent('lines', lineNumber + 1, {
			index: lineNumber + 1,
			content: '',
			editable: true
		});
	}

	return (
		<LinesContext.Provider
			value={{ content, toggleEditable, addEmpty }}
		>
			{props.children}
		</LinesContext.Provider>
	)

}

export function useLines() {
	return useContext(LinesContext);
}
