import Image from "next/image";
// import { Header } from "next/dist/lib/load-custom-routes";
import Header from "./components/Header";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Header />

      <main className="w-full h-4/5 flex flex-col gap-5 items-center justify-center">
        {/* Profile img */}
        <Image
          src={"/profile_img.jpeg"}
          width={150}
          height={150}
          alt="Picture of the author"
          className="neon-img"
        />

        {/* Text */}
        <span className="text-3xl text-center">
          Hello, My name is Vinicius 👋<br></br>
          and basically I solve real problems with code.
        </span>

        {/* Button call to action */}
        <button
          className="text-black p-4 rounded-lg neon-button"
        >
          See my projects
        </button>
      </main>
    </div>
  );
}
