
# バージョン情報

| サービス/ディレクトリ | バージョン情報         |
|----------------------|------------------------|
| Next.js              | 15.4.1                 |
| Node.js              | 22.x                   |
| WordPress            | 6.8.x                  |
| MySQL                | 8.4                    |

# Docker環境の起動方法

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/konatsu-dev/headless-cms.git
   cd headless-cms
   ```

2. **Docker Composeで環境を起動**
   ```bash
   docker compose up -d
   ```
   ※初回起動時はイメージのダウンロードや依存パッケージのインストールが行われるため、数分かかる場合があります。

---

# 各サービスへのアクセス

| サービス   | アクセスURL                | 備考                        |
|------------|---------------------------|-----------------------------|
| Next.js    | http://localhost/         | フロントエンド（ポート80）  |
| WordPress  | http://localhost:8888/    | 管理画面・API（ポート8888） |
| MySQL      | localhost:3306            | ユーザー: user / パスワード: user |

---

## 補足

- Next.jsは`http://localhost/`でアクセスできます（Dockerの80番ポートを使用）。
- WordPressの管理画面やAPIは`http://localhost:8888/`で利用できます。
- MySQLへ外部ツールから接続する場合は、ホスト`localhost`、ポート`3306`、ユーザー`user`、パスワード`user`を使用してください。
