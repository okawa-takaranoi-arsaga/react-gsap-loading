import { useEffect } from "react";
import gsap from "gsap";
import "../assets/css/Loading.css";

// 文字列
const str = "Loading...";

const Loading = () => {
  // DOMが揃ってから1度だけ実行するために、useEffect内で実行する
  useEffect(() => {
    // 連続したアニメーションを実装する為にtimelineオブジェクトを作る。
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".str", {
      y: 20,
      duration: 0.4,
      stagger: 0.1,
    }).to(".str", {
      y: 0,
      duration: 0.4,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="loading">
      {/* 分割してspanタグを表示 */}
      {str.split("").map((char, index) => (
        <span className="str" key={index}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default Loading;
