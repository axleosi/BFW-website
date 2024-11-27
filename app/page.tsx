import Image from "next/image";
import Hero from "./components/Hero";
import Value from "./components/Value";

export default function Home() {
  return (
    <div className="homepage">
      <Hero/>
      <Value/>
    </div>
  );
}
