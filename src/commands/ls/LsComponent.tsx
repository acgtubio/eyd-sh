import { ls } from "./LsService";
import { For } from "solid-js";

type LsItem = {
  type: string,
  url: string,
  name: string,
  description: string,
}

const Ls = () => {
  const projects: LsItem[] = ls();

  return (
    <div>
      <For each={projects}>{(lsItem, i) => {
        <div>
          <a href={lsItem.url}><h1>{lsItem.name}</h1></a>
          <p>{lsItem.description}</p>
        </div>
      }}
      </For>
    </div>
  );
}

export default Ls;
