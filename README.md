# npm scripts tmp

制作途中

## 環境

### html

dev配下で作成
cpxを利用してpublicに構造を保ったままコピー


### css

dev > common > pcss配下に.cssの形式で作成
postcssでコンパイルする
※postcssのプラグインに関してはプロジェクト直下の.postcssrc.jsonを確認


### js

dev > common > js配下に.js形式で作成
babelを利用してコンパイルする
※es6形式で記述可能

※細かい部分に関して再度修正が必要


### lint

cssはstylelintを利用
jsはxoを利用


## test

現状はavaのみ



