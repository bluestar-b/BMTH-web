import useSound from "use-sound";
import pop from "../assets/mc-pop.mp3";

export default function Home() {
  const [play] = useSound(pop);

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-center text-neutral-200">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">NaziCraft</h1>
            <p className="mb-5">The best meinkampf server</p>
            <button
              onClick={play}
              className="btn btn-primary cursor-help border-2 border-gray-100 bg-transparent font-bold text-gray-200 backdrop-blur-sm duration-75 hover:border-gray-400 hover:bg-transparent"
            >
              Add Server
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
