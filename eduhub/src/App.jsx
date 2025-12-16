import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center space-y-10">
      <div
        className={
          isOn
            ? "h-52 w-52 rounded-full bg-yellow-500 shadow-[0_0_60px_20px_rgba(234,179,8,0.7)]"
            : "h-52 w-52 rounded-full border"
        }
      ></div>

      <button
        title="Press the button to trigger the bulb"
        onClick={() => setIsOn(!isOn)}
        className="border bg-indigo-500 text-white w-52 p-2 rounded-md"
      >
        {isOn ? "On" : "Off"}
      </button>
    </div>
  );
}

export default App;
