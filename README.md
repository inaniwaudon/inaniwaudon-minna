# inaniwaudon-minna

Next.js で構築された個人サイトです。Cloudflare Pages（+ Edge Runtime）にデプロイします。

<https://いなにわうどん.みんな>

## Development

```bash
yarn install
yarn run dev
yaru run build

# 短歌用データベースを構築
yarn add -g wrangler
npx wrangler d1 create inaniwaudon-minna
npx wrangler d1 execute inaniwaudon-minna --file=./create.sql
```

## 写真の更新方法

WebP 形式に圧縮した上で、Cloudflare R2 にアップロードし、メタデータを JSON ファイルとして管理します。

1. スクリプトを叩き、圧縮済み画像とメタデータを自動生成する。既に写真が存在する場合は、追記する形を取る。

    ```bash
    ts-node script/compress-image.ts $key $input_dir
    ```
    
    以下の画像が生成される。

    - `/src/data/photo/$key.json`：JSON ファイル
    - `$input_dir/temp/*.webp`：圧縮後画像
    - `$input_dir/temp/thumbnail/*.webp`：サムネイル用画像

2. 生成された画像ファイルを `/photo/$key` に移動させる

3. `/photo` を `s3://site-photos/photo` と同期する

    ```bash
    aws s3 sync photo/ s3://site-photos/photo --delete --profile r2 --endpoint-url https://**.r2.cloudflarestorage.com --dryrun
    ```

4. JSON ファイルを編集してコミットする

## 短歌の削除方法

不適切な短歌は、deleted_at カラムに任意の日付を追加してソフトデリートします。

```sql
UPDATE tanka SET deleted_at = "yyyy-MM-dd HH:mm:ss" WHERE ...
```
