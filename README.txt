TECMOPIA Web Push 登録ページ
================================

GitHub Pages 側に置くファイルです。

推奨配置:
  /push-notify/index.html
  /push-notify/firebase-messaging-sw.js

手順:
1. この push-notify フォルダを、現在GitHub Pagesで公開しているリポジトリへアップロード。
2. GitHub Pagesで https://<あなたのURL>/push-notify/ を開く。
3. PC管理画面 → 🔔通知 → Web Push → 「Web Pushを有効化」。
4. 同じ画面で「PC登録コード発行」。
5. 登録ページへ以下を入力:
   ・GAS Webアプリ /exec URL
   ・6桁の登録コード
   ・PC名
6. 「このPCで通知を受け取る」を押し、Edgeの通知を許可。
7. PC管理画面に端末が1台表示されたら「テスト通知」。

重要:
・service-account JSON / FCM_PRIVATE_KEY はGitHubへ絶対に置かないでください。
・FirebaseのWeb設定値とVAPID公開キーはクライアント側に置く公開情報です。
・Service Workerはindex.htmlと同じフォルダに置いてください。
・登録コードは10分間・1回のみ有効です。


【2026-10-13 Firebase 12.18.0固定版】
Firebase JS SDK 13.0.0で従来getToken()経路が非推奨化されたため、既存GASのFCM登録トークン方式を維持する目的で12.18.0に固定しています。
GitHub Pagesでは index.html と firebase-messaging-sw.js の2ファイルを上書きし、反映後にCtrl+F5してください。
