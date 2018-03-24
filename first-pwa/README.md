## manifest.jsonを読み込む
manifest.jsonは キャッシュされるので `?v=1` とかでキャッシュクリアする。

```
<link rel="manifest" href="./manifest.json?v=1">
```

## manifest.jsonを作成する

[ウェブアプリ マニフェスト  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/web-app-manifest/?hl=ja)

```
{
  "name": "PWA Sample" # インストールバナー？/アプリショートカットの名前
  "short_name": "PWA" # アプリショートカットの名前（優先度 高）
}

```
