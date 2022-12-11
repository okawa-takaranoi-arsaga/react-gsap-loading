## 動作確認

```
git clone git@github.com:okawa-takaranoi-arsaga/react-gsap-loading.git

npm i

npm run start

```

## サンプルローディングの切り替え

Loading1・2 の動作確認は、
src/App.tsx 12,13 行目のコメント化を切り替えることで確認できる。

```
<Suspense fallback={<Loading />}>　テキストローディングを確認したい場合
<Suspense fallback={<Loading2 />}> トラックローディングを確認した場合
```
