# inaniwaudon-minna

Next.js で構築された個人サイトです。

<https://いなにわうどん.みんな>

## Development

```
yarn install
yarn run dev
yaru run build
```

## 写真の更新方法

WebP 形式に圧縮した上で、Cloudflare R2 にアップロードし、メタデータを JSON ファイルとして管理します。

1. スクリプトを叩き、圧縮済み画像とメタデータを自動生成する

    ```bash
    ts-node script/compress-image.py $key $input_dir
    ```
    
    以下の画像が生成される。

    - `/src/data/photo/$key.json`：JSON ファイル
    - `$input_dir/temp/*.webp`：圧縮後画像
    - `$input_dir/temp/thumbnail/*.webp`：サムネイル用画像

2. 生成された画像ファイルを `/photo/$key` に移動させる

3. `/photo` を `s3://site-photos/photo` と同期する

    ```bash
    aws s3 sync photo/ s3://site-photos/photo --delete --profile r2 --endpoint-url https://**.r2.cloudflarestorage.com
    ```

4. JSON ファイルを編集してコミットする
