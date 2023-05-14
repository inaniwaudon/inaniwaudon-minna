# inaniwaudon-minna

Next.js で構築された個人サイト。

https://いなにわうどん.みんな

## Development

```
yarn install
yarn run dev
yaru run build
```

## 写真の更新方法

スクリプトを叩いて写真を WebP に圧縮する。以下のファイルが生成される。

```bash
python script/compress-jpeg.py <input_dir> <output_dir> <json_path>
```

- `$output_dir/*.webp`：圧縮後画像
- `$output_dir/thumbnail/*.webp`：サムネイル用画像
- `json_path`：JSON ファイル

生成された JSON は適宜編集して、`data/photo` 以下に配置する。
出力フォルダ名と JSON のファイル名は合わせる。
