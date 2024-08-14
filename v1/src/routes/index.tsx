import { Title } from "@solidjs/meta";
import Header from "~/components/Header";
import { LinesProvider } from "~/stores/lines";
import Content from "~/components/Content";

export default function Home() {
  return (
    <>
      <Title>Eyd.sh | Under Construction</Title>

      <main class="mt-5">

        <LinesProvider>
          <Content />
        </LinesProvider>

      </main>
    </>
  );
}
