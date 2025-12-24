"use client";

import Header from "@/components/Header/Header";
import Life from "@/components/Life/Life";
import { useGlobalScroll } from "@/components/GlobalScrollProvider";

export default function LifePage() {
  const { currentScreen } = useGlobalScroll();
  
  return (
    <>
      <Header />
      <Life />
    </>
  );
}
