import React from "react";

const AboutPage = () => (
  <div className="container">
    <h1 className="about-title is-center">About</h1>

    <div className="about-wrapper">
      <div className="table-wrapper-top">
        <table>
          <tbody>
            <tr>
              <td className="left-td">Name</td>
              <td className="right-td">飯田琢矢(Iida Takuya)</td>
            </tr>
            <tr>
              <td className="left-td">University</td>
              <td className="right-td">
                京都工芸繊維大学 情報工学課程卒業
                <br />
                京都大学大学院情報学研究科知能情報学専攻 M1
              </td>
            </tr>
            <tr>
              <td className="left-td">laboratory</td>
              <td className="right-td">
                京都工芸繊維大学 インタラクティブ知能研究室
                <br />
                京都大学大学院 飯山研究室
              </td>
            </tr>
            <tr>
              <td className="left-td">Twitter</td>
              <td className="right-td">
                <a href="https://twitter.com/tky_apostle">@tky_apostle</a>
              </td>
            </tr>
            {/* <tr>
              <td className="left-td">Blog</td>
              <td className="right-td">
                <a href="http://wakatakeru.com/">Tech Lancher</a>
              </td>
            </tr> */}
            <tr>
              <td className="left-td">Mail</td>
              <td className="right-td">desuapostle@gmail.com</td>
            </tr>
            <tr>
              <td className="left-td">hobby</td>
              <td className="right-td">
                映画,海外ドラマ,アニメ,バスケ,ポーカー,ゲーム,旅行
              </td>
            </tr>
            {/* <tr>
              <td className="left-td">Notes</td>
              <td className="right-td">二年間浪人していました。</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>

    <h1 className="about-title is-center">Experiences</h1>
    <div className="about-wrapper">
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr className="my">
              <td className="left-td">
                Donuts Co. Ltd.
                <br />
                <br />
                2018/02/01 ~ 2019/3/31
              </td>
              <td className="right-td">
                業務内容:
                <br />
                主にサーバーサイドでのゲームの機能拡張業務
                <br />
                他フロントエンド開発、
                <br />
                問い合わせ対応(データベース調査)
                <br />
                本番リリース対応等
                <br />
                <br />
                技術：
                <br />
                PHP5.x,ZendFramework,HTML5,CSS3,
                <br />
                JavaScript,MySQL,Github,Subversion
                <br />
              </td>
            </tr>
            <tr className="my">
              <td className="left-td">
                株式会社80&Company
                <br />
                <br />
                2018/11/01 ~ now
              </td>
              <td className="right-td">
                業務内容：
                <br />
                受託webアプリ開発業務全般(フルリモート)
                <br />
                （テーブル設計、ユーザ認証機能、検索機能、
                <br />
                いいね機能、決済処理機能、GoogleなどのAPI利用等々)
                <br />
                <br />
                技術：
                <br />
                PHP5.x,PHP7.x,Laravel,slimFramework3,<br/>
                HTML5,CSS3,JavaScript(jQuery),MySQL, <br/>
                GitLab,Github,Trello,Backlogなど
              </td>
            </tr>
            <tr className="my">
              <td className="left-td">
                atma株式会社
                <br />
                <br />
                2020/02/01 ~ now
              </td>
              <td className="right-td">
                業務内容：
                <br />
                受託webアプリ開発フロントエンド
                <br />
                （SPA開発）
                <br />
                <br />
                技術：
                <br />
                JavaScript(Vue.js/Nuxt.js), HTML, CSS, GitLab
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h1 className="about-title is-center">Event</h1>
    <div className="about-wrapper">
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td className="left-td">
                <a href="https://hackbowl.techbowl.co.jp/">HackBowl</a>
                <br />
                企業賞&#x1f3c5;
                <br />
                <br />
                2019年
              </td>
              <td className="right-td">
                HackBowlというタイトルで東京で開催されたハッカソン。
                2人チームで参加。「2021年にエンジニアが増えた時、当たり前に使われるサービスを創造せよ」というテーマで行われた。
                16チームがいる中で企業賞を頂きました。
              </td>
            </tr>
            <tr>
              <td className="left-td">
                アイフル機械学習ハッカソン
                <br />
                （データ解析competition）
                <br />
                優秀賞(準優勝)&#x1f948;
                <br />
                <br />
                2019年
              </td>
              <td className="right-td">
                内容は「アイフルの生データを利用してある特徴を予測するモデルを作成し、
                AUCを評価指標とするcompetition」。2日間で行われた。Kaggleと形式はほぼ同じ。3人チームで参加。全7チーム中2位で準優勝。
                全員機械学習開発経験はあるが、データ解析経験者は自分だけだったので教えながら。やったことはEDA,
                前処理, 特徴量エンジニアリング, モデル選択,
                パラメータチューニング等全般
              </td>
            </tr>
            <tr>
              <td className="left-td">
                KITハッカソン
                <br />
                出場のみ
                <br />
                2017年
              </td>
              <td className="right-td">
                大学内で行われたハッカソン。これが自分のハッカソンデビュー。「防災」をテーマに行われた。ポートフォリオに作品の記載あり。
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AboutPage;
