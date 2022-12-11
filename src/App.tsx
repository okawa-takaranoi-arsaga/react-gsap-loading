import { Suspense, useState } from "react";
import Loading from "./components/Loading";
import Loading2 from "./components/Loading2";
import Suspend from "./components/Suspend";
import "./assets/css/Search.css";

const App = () => {
  const [isResult, setIsResult] = useState(false);

  return (
    <div>
      <Suspense fallback={<Loading2 />}>
        <Suspend>
          <div className="search">
            <button onClick={() => setIsResult((prev) => !prev)}>
              検索ボタン
            </button>
            {isResult && <p>表示結果...</p>}
          </div>
        </Suspend>
      </Suspense>
    </div>
  );
};

export default App;
