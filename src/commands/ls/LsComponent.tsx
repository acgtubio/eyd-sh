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
    <div class="space-y-5">
      <For each={projects}>{(lsItem, i) => {
        return (
          <div>
            <a href={lsItem.url}><h1 class="text-lg">{lsItem.name}</h1></a>
            <p class="text-sm">{lsItem.description}</p>
          </div>
        )
      }}
      </For>
    </div>
  );
}

export default Ls;
