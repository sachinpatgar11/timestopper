import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="not Easy" targetTime={7} />
        <TimerChallenge title="Tough" targetTime={10} />
        <TimerChallenge title="Pros" targetTime={15} />
      </div>
    </>
  );
}

export default App;
