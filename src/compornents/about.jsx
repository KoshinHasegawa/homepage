import React from "react";
import "../styles/about.css";
import Header from "./header";

function About() {
  function onClickHandle() {
    window.location.replace(
      "https://www.youtube.com/channel/UC9WJo5ZJVXMZiA5XV2jLx5Q"
    );
  }

  return (
    <>
      <Header />
      <main class="wrapper">
        <article class="content_wrapper">
          <h1>hsgw_1001</h1>
          <h2>自己紹介</h2>
          <p>プログラミング歴2年弱のくそ雑魚プログラマー(笑)です。</p>
          <p>何年掛かっても一流のプログラマーとして活躍できるよう頑張ります!</p>

          <h2>使用技術</h2>
          <p>C++，TypeScript，JavaScript</p>
          <p>HTML，CSS，React</p>
          <p>Windows，Ubuntu</p>

          <h2>プログラミング以外の趣味</h2>
          <p>プログラミング以外だと写真を撮ることが趣味です．</p>
          <div class="img_container">
            <img
              src="https://2.bp.blogspot.com/-BBDUhqUqFxY/WUdZNRQOykI/AAAAAAABFDw/dHO4dZ-5-NQTyXy_8_mpy4c5y-mYlPvFACLcBGAs/s800/pop_gazouha_image_desu_shikaku.png"
              alt="趣味の画像1"
            />
            <img
              src="https://2.bp.blogspot.com/-BBDUhqUqFxY/WUdZNRQOykI/AAAAAAABFDw/dHO4dZ-5-NQTyXy_8_mpy4c5y-mYlPvFACLcBGAs/s800/pop_gazouha_image_desu_shikaku.png"
              alt="趣味の画像２"
            />
          </div>

          <h2>好きなもの</h2>
          <p>動物全般！　特に猫は本当に神</p>
          <p>古代エジプトの民です↑ </p>

          <p>食べ物だと寿司，ラーメンが大好物です</p>

          <h2>自由枠</h2>
          <p>自由枠です！</p>
          <p>好きなことを書いてください！</p>

          <h2>経歴</h2>
          <p>九州工業大学 情報工学部 情報・通信工学科 在学</p>
          <button onClick={onClickHandle}>Click Me!</button>
        </article>
      </main>
    </>
  );
}

export default About;
