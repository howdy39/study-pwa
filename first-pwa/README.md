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
  "display": "standalone", # ブラウザ上ではなくアプリ風に表示
  "orientation": "any" # 向きを指定(standalone指定時に使用)
  "background_color": "#f00" # スプラッシュ画面の背景色(standalone指定時に使用)
  "icons": ... # アプリショートカットアイコンの画像（スプラッシュ画面にも表示される）
  "theme_color": "#0F0" # ステータスバーを指定(standalone指定時に使用)
}

```


## その他
### <meta name="theme-color" content="#db5945">
Chormeブラウザとステータスバーの色を変える。
`standalone` と併用した場合、metaが勝つ。（スプレッシュ時だけmanifest.jsonのtheme_colorが使われる）
[Support for theme-color in Chrome 39 for Android  |  Web  |  Google Developers](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)

```
<meta name="theme-color" content="#db5945">
```
