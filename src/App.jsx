import useSound from 'use-sound'
import pop from './mc-pop.mp3'


export default function App() {
  const [play] = useSound(pop);


  return (<>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://upload.fusemeow.codes/uploads/94bf0d61bf9e05f9.png)'}}>
  <div className="hero-overlay bg-opacity-25"></div>
  <div className="hero-content text-center text-neutral-300">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">BlueMyth</h1>
      <p className="mb-5">The best meinkampf server</p>
      <button onClick={play} className="btn btn-primary bg-transparent duration-75 border-gray-200 backdrop-blur-sm border-2">Start WW3</button>
    </div>





  </div>
</div>
  </>)
}
