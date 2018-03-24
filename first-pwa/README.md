## manifest.jsonを読み込む
manifest.jsonは キャッシュされるので `?v=1` とかでキャッシュクリアする。

```
<link rel="manifest" href="./manifest.json?v=1">
```

## manifest.jsonを作成する

[ウェブアプリ マニフェスト  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/web-app-manifest/?hl=ja)

```
{
  "name": "PWA Sample" # スプラッシュ画面で表示される/アプリショートカットの名前
  "short_name": "PWA" # アプリショートカットの名前（優先度 高）
  "start_url": "./" # アプリ起動時のURLを指定(指定しないと、URLがそのまま設定されてしまう）
  "display": "standalone", # ブラウザ上ではなく表示
  "orientation": "any" # 向きを指定(standalone指定時に使用)
  "background_color": "#f00" # スプラッシュ画面の背景色
  "icons": ... # アプリショートカットアイコンの画像（スプラッシュ画面にも表示される）
}

```
