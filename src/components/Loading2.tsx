import gsap, { Power2, Bounce } from "gsap";
import { useEffect } from "react";
import "../assets/css/Loading2.css";
import Track from "../assets/image/track.png";

const Loading2 = () => {
  const smokeCount = Array<number>(20).fill(0);

  useEffect(() => {
    // 全体の移動　右から左へ
    gsap.fromTo(
      ".top",
      {
        x: "200px",
        repeat: -1,
      },
      {
        x: "-200px",
        duration: 9,
        repeat: -1,
      }
    );
    // 煙のアニメーション
    gsap.from(".smoke", {
      duration: 3,
      scale: 0,
      right: 0,
      bottom: 20,
      backgroundColor: "#4b4b4b",
      ease: Power2.easeInOut,
      stagger: 0.3, // 順番に要素をアニメーションさせる
      repeat: -1,
    });

    // トラック画像のバウンド
    gsap.to(".img", {
      duration: 2,
      y: "random(0, 30)", // x軸にランダムな値
      ease: Bounce.easeOut,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="loading">
      <div className="top">
        <img src={Track} alt="track" className="img" />
        {smokeCount.map((_, index) => {
          return <div key={index} className="smoke" />;
        })}
      </div>
      <p className="text">Loading...</p>
    </div>
  );
};

export default Loading2;
