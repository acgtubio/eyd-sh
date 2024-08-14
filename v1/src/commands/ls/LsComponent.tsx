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

      <h1 class="text-3xl font-bold">My Projects</h1>

      <For each={projects}>{(lsItem, i) => {
        return (
          <div class="px-6 py-6 border rounded-lg border-neutral-500">
            <a href={lsItem.url}><h1 class="text-lg font-bold">{lsItem.name}</h1></a>
            <p class="text-sm mt-2">{lsItem.description}</p>
          </div>
        )
      }}
      </For>

    </div>
  );
}

export default Ls;
