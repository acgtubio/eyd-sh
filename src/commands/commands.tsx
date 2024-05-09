import Ls from "./ls/LsComponent";
import { Dynamic } from "solid-js/web";

const ls = () => <Ls />;

const commandMapping = {
  "ls": ls,
}

const Command = (props) => {
  console.log(props.name);
  return (
    <div>
      <Dynamic component={commandMapping[props.name]} />
    </div>
  );
}

export default Command;

export const isCommand = (command: string) => {
  return command in commandMapping;
}
