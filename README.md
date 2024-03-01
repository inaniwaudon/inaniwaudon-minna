# inaniwaudon-minna

Next.js で構築された個人サイトです。Cloudflare Pages（+ Edge Runtime）にデプロイします。

<https://いなにわうどん.みんな>

バックエンド：[inaniwaudon-minna-backend](https://github.com/inaniwaudon/inaniwaudon-minna-backend)

## Development

```bash
yarn install
yarn run dev
yarn run build
```

## 写真の更新

WebP 形式に圧縮した上で、Cloudflare R2 にアップロードし、メタデータを JSON ファイルとして管理します。

1. スクリプトを実行し、圧縮済み画像とメタデータを自動生成する。
既にメタデータが存在する場合は、新たに変換した画像が追記される。
ただし、同名の写真が存在する場合は、タイトル・場所以外の項目が上書きされる。

    ```bash
    npx ts-node script/compress-image.ts $key $input_dir
    ```
    
    以下のファイルが生成される。

    - `/src/app/photos/_const/$key.json`：JSON ファイル
    - `$input_dir/dst/*.webp`：圧縮後画像
    - `$input_dir/dst/thumbnail/*.webp`：サムネイル用画像

2. 生成された画像ファイルを `/photo` に移動させる

3. `/photo` を `s3://site-photos/photo/$key` と同期する

    ```bash
    aws s3 sync photos s3://site-photos/photo/$key --profile r2 --endpoint-url https://**.r2.cloudflarestorage.com --dryrun
    ```

4. JSON ファイルを編集してコミットする

## チェックイン

iOS 端末からチェックイン機能を利用するには、位置情報を許可したうえで「設定 → Safari → サイト越えトラッキングを防ぐ」を無効にする必要があります。
