import Image from "next/image";
import Hero from "./components/Hero";
import Owner from "./components/Owner";

export default function Home() {
  return (
    <div className="homepage">
      <Hero/>
      <Owner/>
    </div>
  );
}
