import { Link, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Header from "./components/Header";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Eyd.sh | Under Construction</Title>
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <Link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
          <Link rel="icon" sizes="32x32" href="../public/favicon-32x32.png" />
          <Link rel="icon" sizes="16x16" href="../public/favicon-16x16.png" />
          <Link rel="manifest" href="../public/site.webmanifest" />
          <Link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Mountains+of+Christmas:wght@400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
          <Header />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
