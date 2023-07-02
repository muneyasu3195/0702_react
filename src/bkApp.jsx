import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1000);

  const test = () => {
    setCount(count + 1);
  };

  // 画面が表示された直後、一回実行。（一番最後に動いてくれる）
  // データ操作は表示が完了してから。
  useEffect(() => {
    console.log("最後");
  }, []);
  console.log("あああ");
  // main.jsx でStrictMode になっているため、2回ログが出る

  return (
    <>
      <h2 onClick={test}>{count}回目</h2>
    </>
  );
}

export default App;
