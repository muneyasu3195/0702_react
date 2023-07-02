import { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  // リロード時にデータ取得
  const getData = () => {
    const data = window.localStorage.getItem("test");
    // window と書かなくても動くけど

    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // 登録されるデータ保持
  const [data, setData] = useState(getData);

  // タイトル入力欄のテキストを保持
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);
  // []の意味：useStateのdataの箱に「変更」があったら、useEffectが動く

  // 送信を押したら登録
  const handleSubmit = (e) => {
    // e=eventのこと。送信を押したときに発生する挙動
    console.log(e, "eee");

    // フォームタグは送信の際に強制リロードするので防ぐ
    e.preventDefault();

    // データを登録するためのオブジェクトを作成
    let pushData = {
      title,
    };
    setData([...data, pushData]);

    // フォームに入力した内容を空にする
    setTitle("");
  };

  // console.log(data, "useState Data という箱の中身をチェック");

  return (
    <div className="app">
      <h1>localStorage</h1>

      {/* フォーム */}
      {/* onSubmit：送信すると自動で実行 */}

      <form onSubmit={handleSubmit}>
        {/* title */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          required
          // 変更があった場合、title の中身を更新（＋useStateで画面表示も更新）する。
          // コンソールを見てみよう！
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* 送信ボタン */}
        <Button variant="contained" type="submit">
          送信
        </Button>
        {/* <button type="submit">送信</button> */}
      </form>

      {data.map((item, index) => (
        <div key={index}>
          {index}番目
          {item.title}
        </div>
      ))}
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
