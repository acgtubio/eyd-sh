import { Title } from "@solidjs/meta";
import Header from "~/components/Header";
import { LinesProvider } from "~/stores/lines";
import Content from "~/components/Content";

export default function Home() {
  return (
    <>
      <Header />

      <main class="mt-3">
        <Title>Eyd.sh</Title>

        <LinesProvider>
          <Content />
        </LinesProvider>

      </main>
    </>
  );
}
