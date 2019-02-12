import React from 'react'

const AboutPage = () =>  (
    <div className="container">
      <h1 className="about-title is-center">About</h1>

      <div className="about-wrapper">
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr><td className="left-td">Name</td><td className="right-td">飯田琢矢(Takuya Iida)</td></tr>
              <tr><td className="left-td">Birthday</td><td className="right-td">1995/08/18</td></tr>
              <tr><td className="left-td">University</td><td className="right-td">京都工芸繊維大学 情報工学3年</td></tr>
              <tr><td className="left-td">Twitter</td><td className="right-td">@horizontal_ver</td></tr>
              <tr><td className="left-td">Blog</td><td className="right-td"><a href="http://wakatakeru.com/">Tech Lancher</a></td></tr>
              <tr><td className="left-td">Mail</td><td className="right-td">libertytakuya@yahoo.co.jp</td></tr>
              <tr><td className="left-td">hobby</td><td className="right-td">映画,海外ドラマ(科学系),アニメ,バスケ,ゲーム,出かける事(旅行含む)</td></tr>
              <tr><td className="left-td">Notes</td><td className="right-td">二年間浪人していました。</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="about-title is-center">Experiences(Intern)</h1>
      <div className="about-wrapper">
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr><td>Donuts Co. Ltd.</td><td>主にサーバーサイドでのゲームの機能拡張・追加と<br/>フロントエンドへの反映。他問い合わせ対応(データベースの調査)・本番リリース対応等<br/>PHP,ZendFramework,MySQL,Trello,Subversion,Slack</td><td>Since 2018/02/01~</td></tr>
              <tr><td>株式会社80&Company</td><td>webサイト制作のフロントエンドと設計、バックエンドなど。フルリモート勤務。<br/>PHP,Laravel,MySQL,Backlog,GitLab,Slack</td><td>Since 2018/12/01~</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
)

export default AboutPage
