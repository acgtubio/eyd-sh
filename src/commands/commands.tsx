import Ls from "./ls/LsComponent";
import { Dynamic } from "solid-js/web";

const Ls = () => <Ls />;

const commandMapping = {
  "ls": Ls,
}

const Command = (props: string) => {
  return (
    <div>
      <Dynamic component={commandMapping[props]} />
    </div>
  );
}

export default Command;
