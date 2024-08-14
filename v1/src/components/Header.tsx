import type { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="flex w-screen px-14 h-20 items-center pt-[20px]">
      <a href="https://eyd.sh"><h1 class="font-bold text-4xl tracking-wide text-white">eyd.sh</h1></a>
    </header>
  );
};

export default Header;
