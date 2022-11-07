import React from "react";
import "../styles/main.css";
import Header from "./header";
import Footer from "./footer";

function Main() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h1 class="title">hsgw_1001</h1>
        <p class="desc">hsgw_1001のホームページへようこそ！</p>
        <div class="social">
          <a href="https://qiita.com/RoaaaA" target="_blank" class="qiita"></a>
          <a
            href="https://github.com/KoshinHasegawa"
            target="_blank"
            class="git"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
          <a href="https://twitter.com/yosse95ai" target="_blank" class="twt">
            <i class="fa-brands fa-twitter fa-lg"></i>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
