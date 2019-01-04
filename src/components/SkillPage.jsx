import React from 'react'

const SkillPage = () =>  (
    <div className="container">
      <h1 className="skill-title is-center">Skill</h1>
      <div className="skill-wrapper">
        <div className="skill-table-wrapper">
          <table>
            <thead>
              <th colSpan="3">Language/Framework/Library</th>
            </thead>
            <tbody>
              <tr>
                <td className="skill-left-td">C/C++</td>
                <td className="skill-middle-td">3年/3か月</td>
                <td className="skill-right-td">大学で使用しています。競技プログラミングの問題を解くのにも使用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">Java</td>
                <td className="skill-middle-td">7か月</td>
                <td className="skill-right-td">大学で使用していました。Androidアプリ作りでも使用しました。</td>
              </tr>
              <tr>
                <td className="skill-left-td">PHP<br/>(Laravel)<br/>(ZendFramework)</td>
                <td className="skill-middle-td">1年</td>
                <td className="skill-right-td">2社のインターンで使用しています。個人開発でも使用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">Ruby<br/>(Ruby on Rails)</td>
                <td className="skill-middle-td">1年</td>
                <td className="skill-right-td">閲覧ランキング機能付きのブログアプリを作りました。現在はwebアプリ開発で利用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">Python<br/>(Django)</td>
                <td className="skill-middle-td">5か月</td>
                <td className="skill-right-td">機械学習の勉強と、競技プログラミングの勉強、webアプリ開発で使用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">Kotlin</td>
                <td className="skill-middle-td">4か月</td>
                <td className="skill-right-td">Androidアプリ開発で使用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">JavaScript<br/>(jQuery,React.js<br/> Node.js)</td>
                <td className="skill-middle-td">1年</td>
                <td className="skill-right-td">webアプリ開発で使用しています。</td>
              </tr>
              <tr>
                <td className="skill-left-td">HTML5/CSS3<br/>(Sass)</td>
                <td className="skill-middle-td">1年</td>
                <td className="skill-right-td">インターンとwebアプリ開発で使用しています。</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="skill-table-wrapper">
          <table>
            <thead>
              <th colSpan="3">Database</th>
            </thead>
            <tbody>
              <tr><td className="skill-left-td">MySQL</td><td className="skill-right-td">インターンと個人開発時に使用しています。</td></tr>
              <tr><td className="skill-left-td">PostgreSQL</td><td className="skill-middle-td">友人との開発時で使用しています。</td></tr>
              <tr><td className="skill-left-td">SQLite</td><td className="skill-middle-td">友人との開発時で使用しています。</td></tr>
              <tr><td className="skill-left-td">Realm</td><td className="skill-middle-td">Androidアプリ開発時で使用しています。</td></tr>
            </tbody>
          </table>
        </div>

        <div className="skill-table-wrapper">
          <table>
            <thead>
              <th colSpan="3">Tools</th>
            </thead>
            <tbody>
              <tr><td className="skill-left-td">Webpack</td><td className="skill-right-td">個人開発時に使用しています。</td></tr>
              <tr><td className="skill-left-td">GitHub</td><td className="skill-right-td">友人との開発時に使用しています。</td></tr>
              <tr><td className="skill-left-td">Subversion</td><td className="skill-right-td">インターン先で使用しています。</td></tr>
              <tr><td className="skill-left-td">Atom</td><td className="skill-right-td">普段使用しているテキストエディタです。</td></tr>
              <tr><td className="skill-left-td">Vim</td><td className="skill-right-td">サーバー上のファイルを編集するときや、普段のファイル編集でもたまに使います。</td></tr>
            </tbody>
          </table>
        </div>

        <div className="skill-table-wrapper">
          <table>
            <thead>
              <th colSpan="3">Others</th>
            </thead>
            <tbody>
              <tr><td className="skill-left-td">Apache</td><td className="skill-right-td">サーバーの勉強しようと、自宅のPCでCentoOS7を入れてwebサーバーを作ってみたときに設定を触りました。</td></tr>
              <tr><td className="skill-left-td">Windows</td><td className="skill-right-td">ずっと使っているOSです。</td></tr>
              <tr><td className="skill-left-td">Linux</td><td className="skill-right-td">CentoOS7を普段大学で使用しています。またインターンでcronを利用したバッヂの設定をしたことがあります。</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
)

export default SkillPage
