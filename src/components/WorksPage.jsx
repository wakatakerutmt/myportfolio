import React, { Component } from "react";

class WorksPage extends Component {
  openModalWindow() {
    const modal = document.getElementById("modalWindow");
    modal.style.display = "block";
  }

  closeModalWindow() {
    const modal = document.getElementById("modalWindow");
    modal.style.display = "none";
  }

  render() {
    return (
      <div className="container">
        <h1 className="works-title is-center">Works</h1>

        <div className="card">
          <div className="left-component">
            <img src="img/portfolio.JPG" className="img-portfolio" />
          </div>
          <div className="right-component">
            <h2>My Portfolio(Web)</h2>
            <p>閲覧して頂いているこのポートフォリオサイトです。</p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・HTML,CSS(Sass)</li>
              <li>・JavaScript(React.js、JSX)</li>
              <li>・Webpack</li>
              <li>・GitHub Pages</li>
            </ul>
            <p>
              備考：急ぎで作ったため適当なところも多く未完成です。手入れしたい。
            </p>
          </div>
        </div>


        <div className="card">
          <div className="left-component">
            <img src="img/atsumeta.jpg" className="img-nothing" />
          </div>
          <div className="right-component">
            <h2>Atsumeta</h2>
            <p>
              各企業の技術ブログを集めたサービス。単なるキュレーションサイトではなく、各企業の技術ブログのテキストから「利用言語」「最近hotなサービス」「技術領域」を解析して取得し、技術ブログからわかる企業情報ページを作ったり、企業側もアクションを取れて
              採用活動に繋げられるような仕組みを考案。ハッカソンで発表した内容だが、現在実際にサービスとして稼働させることを目標として取り組んでいる。
            </p>
            <ul className="tool-list">
              <li>使用言語・技術・ツールなど</li>
              <li>・Go / Gin</li>
              <li>・Vue.js / Nuxt.js</li>
              <li>・Docker, Nginx, AWS(ECS,RDS)</li>
            </ul>
            <p>
              備考:2020年夏のリリースに向けて取り組んでいる (著作権問題でモザイクをかけています。)
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/bosite01.jpg" className="img-bosite" />
            <div className="more-image" onClick={() => this.openModalWindow()}>
              クリックで他の画像(内容はデモ)
            </div>
          </div>
          <div className="right-component">
            <h2>bosite(Web)</h2>
            <p>
              災害を実際に体験した個人が有益と思える防災関連の情報を発信し、共有できる投稿型サイト。防災に関する知見を集約し実際の災害時困ったときでもこのサイトを見れば良い対処法が得られる、というコンセプト。名前は防災＋サイトより。
            </p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・Python, webスクレイピング(緊急時に気象庁の地震速報表示)</li>
              <li>・Django, SQlite</li>
              <li>・HTML,CSS, JavaScript(jQuery),Ajax通信(いいね機能等)</li>
            </ul>
            <p>
              備考：ハッカソンでの作品。３人のチーム開発のもので自分の担当はフロントエンド全般とバックエンドのログイン以外の機能ほとんど。一部の修正が出来次第、時期を見てリリースを予定しています。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/ai.jpg" className="img-nothing" />
          </div>
          <div className="right-component">
            <h2>bike or car画像判定 <a href="http://34.226.247.75/carbike/">リンク</a>
            </h2>
            <p>
              サービスを意識して開発したのではなく、機械学習をアプリに組み込む勉強目的で作成。車かバイク化の判定を画像から行う。
              ResNetの事前学習モデルを利用し、FlickrAPIで取得した車とバイクの画像でfine-tuningを行ったモデルを使用。
            </p>
            <ul className="tool-list">
              <li>使用言語・技術・ツールなど</li>
              <li>・Python (PyTorch)</li>
              <li>・Django</li>
              <li>・Gunicorn, Nginx, AWS(EC2)</li>
            </ul>
            <p>
              備考:特になし
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/noimage.png" className="img-nothing" />
          </div>
          <div className="right-component">
            <h2>ミンナのススメ</h2>
            <p>
              オススメを聞いたら、各ユーザーが答えてくれる。回答には投票機能があり、そのオススメが支持されているものなのか分かるようになっています。
              全く同じようなサービスでslantという海外のサービスの日本版
            </p>
            <ul className="tool-list">
              <li>使用言語・技術・ツールなど</li>
              <li>・Python</li>
              <li>・Django</li>
              <li>・HTML,CSS,JavaScript</li>
              <li>・Docker, Nginx, GCP</li>
            </ul>
            <p>
              備考:友人と二人で制作。デプロイ済みではあるが、大幅改修が必要のため非公開。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/nothing2.jpg" className="img-nothing" />
          </div>
          <div className="right-component">
            <h2>
              Nothing To Do(Web){" "}
              <a href="https://nothing-to-do.herokuapp.com/">β版リンク</a>
            </h2>
            <p>
              暇なとき友人を誘いたいけど、友人が暇かどうかいちいち聞かないと分からない...そんなめんどくささを解消。このアプリを見れば暇な友人が一目瞭然。暇してる友人を即誘って遊べるアプリ
            </p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・Ruby</li>
              <li>・Ruby on Rails, PostgreSQL</li>
              <li>・HTML,CSS, JavaScript(jQuery)</li>
            </ul>
            <p>
              備考:友人と二人で開発。担当はデザインとフロントエンド全部、サーバーサイドは友人を誘う際の招待の送信・通知・受け入れ・拒否の機能、プロフィールの更新機能等。なぜスマホアプリにしなかったのか謎。気が向いたらスマホアプリ化予定
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/line01.jpg" className="img-line" />
            <img src="img/line02.jpg" className="img-line" />
          </div>
          <div className="right-component">
            <h2>文字出力くん(Line Bot)</h2>
            <p>
              画像認識により、画像の中の文字を出力してくれます。縦書き横書きどちらにも対応しています。
            </p>
            <div className="is-flex">
              <div>
                <ul className="tool-list">
                  <li>使用した言語・技術・ツールなど</li>
                  <li>・JavaScript</li>
                  <li>・Google App Script</li>
                  <li>・Google Vision API</li>
                  <li>・Line Messaging API</li>
                </ul>
                <p>
                  備考:GASを使うとサーバーを自分で用意しなくて済み簡単に作れると知ったのと、紙でしかない資料の文字スキャンをアプリなど使わずにLineであったら便利だと思ったのがきっかけです。※現在はAPI利用を停止しているため利用できません。
                </p>
              </div>
              <div className="qr-ccode">
                <img src="img/line03.jpg" className="img-line-mini" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/electron.jpg" className="img-electron" />
          </div>
          <div className="right-component">
            <h2>Physics Calculator(デスクトップアプリ)</h2>
            <p>
              モーメント計算など、物理計算を入力するだけで行ってくれる計算機。前の計算結果を次の計算に利用するものは入力を省略できるようにもプログラムを組みました。
            </p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・Electron</li>
              <li>・HTML,CSS,JavaScript</li>
            </ul>
            <p>
              備考:プライベート用。親が仕事で物理計算をすることがあり、関数電卓を使ってやっていて大変そうだったので、PC上で完結でき、なおかつ楽ができるように提案して作りました。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/memoboard.jpg" className="img-memoboard" />
          </div>
          <div className="right-component">
            <h2>メモボード(Androidアプリ)</h2>
            <p>マッピングをアプリ上で出来るようにしたアプリ</p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・Kotlin</li>
              <li>・Realm</li>
              <li>・Android Studio</li>
            </ul>
            <p>
              備考:友人を誘い二人で開発。普段webばかりなのでネイティブアプリを作ってみたいという思いがあったのと、簡単なメモアプリを作ろうと考えていた時、マッピングのアプリはなかったので作ってみることにしました。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/map01.jpg" className="img-line" />
            <img src="img/map02.jpg" className="img-line" />
          </div>
          <div className="right-component">
            <h2>My Map(Androidアプリ)</h2>
            <p>
              自分が行って気に入った場所を地図上に登録。自分のお気に入りの場所を地図に残していけるアプリ
            </p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・Kotlin</li>
              <li>・Realm</li>
              <li>・Android Studio</li>
            </ul>
            <p>
              備考:友人を誘い二人で開発。同じ機能で、Swarmというアプリが既にありますが色々と機能がありすぎて自分の使いたい目的と合わず使いにくさを感じたので、行った場所を地図にコメントと写真をつけて登録できTOPページからいきなり地図と登録した場所を表示させるというシンプルさを追求して作りました。
            </p>
          </div>
        </div>

        {/* <div className="divide">coming soon</div> */}

        <div className="divide">
          以下は勉強目的で作った物からの一部抜粋になります。
        </div>

        <div className="card">
          <div className="left-component">
            <img src="img/hotel-search.jpg" className="img-hotel-search" />
          </div>
          <div className="right-component">
            <h2>ホテル検索サービス(Web)</h2>
            <p>Reactの勉強目的で教材を元に作ったものです。</p>
            <ul className="tool-list">
              <li>使用した言語・技術・ツールなど</li>
              <li>・HTML,CSS</li>
              <li>・JavaScript(React.js)</li>
              <li>・Webpack</li>
              <li>・GoogleMap API</li>
              <li>・楽天トラベル施設検索API</li>
            </ul>
            <p>
              機能詳細:地名や建物名を検索したら、その周辺のホテルの情報(楽天のサイトに基づく)の一覧が表示されるという機能。価格と指定した距離からのソート機能付き。
            </p>
          </div>
        </div>

        <section id="modalWindow" className="modal-window">
          <div
            id="modalBackground"
            className="modal-background"
            onClick={() => this.closeModalWindow()}
          />
          <div className="modal-wrapper-file">
            <img src="img/bosite002.jpg" className="img-bosite-detail" />
            <img src="img/bosite003.jpg" className="img-bosite-detail" />
            <img src="img/bosite004.jpg" className="img-bosite-detail" />
            <img src="img/bosite005.jpg" className="img-bosite-detail" />
          </div>
          <div
            id="closeModal"
            className="close-modal"
            onClick={() => this.closeModalWindow()}
          >
            ×
          </div>
        </section>
      </div>
    );
  }
}

export default WorksPage;
