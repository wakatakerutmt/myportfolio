import React from "react";

const SkillPage = () => (
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
              <td className="skill-right-td">大学と競技プログラミングで使用しています。</td>
            </tr>
            <tr>
              <td className="skill-left-td">Java</td>
              <td className="skill-right-td">
                大学で使用。Androidアプリ作りで使用しました。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">Go (Gin)</td>
              <td className="skill-right-td">
                web開発で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">
                PHP
                <br />
                (Laravel /
                <br />
                 ZendFrameworkなど)
              </td>
              <td className="skill-right-td">
                業務で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">
                Ruby
                <br />
                (Ruby on Rails)
              </td>
              <td className="skill-right-td">インターンの課題で使用。友人との開発で使用しています。</td>
            </tr>
            <tr>
              <td className="skill-left-td">
                Python
                <br />
                (Django / Flask)
              </td>
              <td className="skill-right-td">
                機械学習やデータ解析(研究,
                Kaggle)とwebアプリの開発で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">Kotlin</td>
              <td className="skill-right-td">
                Androidアプリ開発で使用しました。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">
                JavaScript / TypeScript
                <br />
                (jQuery / React / Vue / Nuxt)
              </td>
              <td className="skill-right-td">
                業務と個人開発で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">
                HTML5/CSS3
                <br />
                (Sass)
              </td>
              <td className="skill-right-td">
               web開発時に使用しています。
              </td>
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
            <tr>
              <td className="skill-left-td">MySQL</td>
              <td className="skill-right-td">
                業務と普段の開発時に使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">PostgreSQL</td>
              <td className="skill-middle-td">
                友人との開発時で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">SQLite</td>
              <td className="skill-middle-td">
                友人との開発時で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">Realm</td>
              <td className="skill-middle-td">
                Androidアプリ開発時で使用しています。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="skill-table-wrapper">
        <table>
          <thead>
            <th colSpan="3">Tools</th>
          </thead>
          <tbody>
            <tr>
              <td className="skill-left-td">node.js, Webpack等</td>
              <td className="skill-right-td">
                業務、個人開発で使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">GitHub</td>
              <td className="skill-right-td">
                業務、普段の開発時に使用しています。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">GitLab</td>
              <td className="skill-right-td">業務でのみ使用しています。</td>
            </tr>
            <tr>
              <td className="skill-left-td">Subversion</td>
              <td className="skill-right-td">業務でのみ使用していました。</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="skill-table-wrapper">
        <table>
          <thead>
            <th colSpan="3">OS</th>
          </thead>
          <tbody>
            <tr>
              <td className="skill-left-td">Windows</td>
              <td className="skill-right-td">昔からずっと使っているOSです。</td>
            </tr>
            <tr>
              <td className="skill-left-td">Linux</td>
              <td className="skill-right-td">
                CentOS7を普段大学で使用しています。業務でcronを利用したりといった経験もあります。
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      <div className="skill-table-wrapper">
        <table>
          <thead>
            <th colSpan="3">Server, infrastructure etc..</th>
          </thead>
          <tbody>
            <tr>
              <td className="skill-left-td">Apache / Nginx</td>
              <td className="skill-right-td">
               webアプリのデプロイで設定した経験があります。
              </td>
            </tr>
            <tr>
              <td className="skill-left-td">Docker / GCP(GCE) / AWS(EC2,ECS,RDS)</td>
              <td className="skill-right-td">
                業務や個人開発、研究などで利用しています。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default SkillPage;
