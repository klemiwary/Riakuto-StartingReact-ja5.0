<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 5 版』第 1 刷の正誤表・更新情報

最終更新日： 2025 年 7 月 2 日

### ご注意点

- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 4.1 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【① 言語・環境編】

- 2-3-1. JavaScript におけるプリミティブ型 / p.53  
  現在、ts-node の環境構築には「4-2-1. 型アノテーションと型推論」で説明するような環境構築が必要。ここではまだその環境がないため、[TS Playground](https://www.typescriptlang.org/ja/play/) を使うように変更。

```diff
  静的型付け言語であるTypeScript と挙動のちがいを比べてみるとわかりやすいかな」

- $ ts-node
- > let num: number = 100;
- > num = 200;
- 200
- > num = 'foo';
- <repl>.ts:6:1 - error TS2322: Type 'string' is not assignable to type 'number'.
- num = 'foo'
- ~~~
-
- 「前者が動的型付け言語である JavaScript の挙動。これは Ruby と同じなのでわかる
- と思うけど、一度宣言した変数に異なるデータ型の値を入れ直すことができる。後者が
- 静的型付け言語の TypeScript での挙動で、変数を let で宣言していてもデータ型が
- 異なると値の再代入はコンパイルエラーになって許されない」
+ 「JavaScript での挙動はこのようになる。これは Ruby と同じなのでわかると思うけど、
+ 一度宣言した変数に異なるデータ型の値を入れ直すことができる。では TypeScript で
+ 同じことを実行してみよう。TS Playgroud というWeb 上でypeScript を手軽に試すこと
+ ができる実行環境で同様に入力、実行してみる」
+
+ let num: number = 100;
+ num = 200;
+ num = 'foo';
+ ~~~
+
+ Errors in code
+ | Type 'string' is not assignable to type 'number'.
+
+ 「これを見ればわかるように、TypeScript では変数を let 再代入はエラーになって
+ 許されない」
  「なるほど、理解できました。軽々しく『型がない』とか言っちゃいけないんですね……」
```

<br />

## 【② React 基礎編】

- 10-2. 第4世代：メタフレームワークの時代 / p.210

```diff
  Redux が Redux Thunk や Redux-Saga と組み合わせて用いられたり、GraphQL クライ
  アントの Relay や Apollo、キャッシュを統合したデータフェッチライブラリの
- RSW
+ SWR
  や React Query。
```

<br />

## 【③ React 実践編】

- 11-3. React Router を使う / p.28 / 脚注22

```diff
- 22 「第14 章 グローバルな状態を扱う」で説明しています。
```

- 脚注124、126、130、134、137、142、147、157、162、166、172、176、177、200、206
  - 第 13〜15 章のサンプルコードのリポジトリ URL から `tree/main/` が抜けている

```diff
- https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/13-error/...
+ https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/13-error/tree/main/...

- https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/14-memoize/...
+ https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/14-memoize/tree/main/...

- https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/15-form/...
+ https://github.com/klemiwary/Riakuto-StartingReact-ja5.0/15-form/tree/main...
```

- 11-4-4. Next.js ルーティングの各種 API / p.71 / 脚注68

```diff
- ただし Server Actions 内で使用した場合は "push" がデフォルトになります。Server Actions については「13-3-1. Server Actions」で説明しています。
+ ただし Server Functions 内で使用した場合は "push" がデフォルトになります。Server Functions については[「15-2-1. フォームの Action と Server Functions」]で説明しています。
```

- 12-4-1. SPA でのSuspense / p.100 / 脚注104

```diff
- 104 「10-2-5. サーバサイドでの React 運用にどのフレームワークを採用するべきか」で触れています。
+ 104 「10-2-5. どのメタフレームワークを採用するべきか」で触れています。
```

- 13-3. Next.js のApp Router でエラーハンドリング / p.124

```diff
  やりたくてもできなかったの。
- 後で説明するグローバルな状態管理
+ Context のようなグローバルな状態管理の機能
  を用いればできなくもないけど、それだけのために
- 導入するには大がかりすぎるしね。
+ そんな大げさなことはしたくない。
```

- 同ページ内の脚注128

```diff
- 128 「第16 章 グローバルな状態管理」で説明しています。
```

- 14-3. React Compiler を導入する / p.140  
  Next.js バージョン 15.3.1 より React Compiler の SWC 最適化機能が導入されたため、それに合わせて修正。電子版では修正済み。  
  <https://github.com/vercel/next.js/releases/tag/v15.3.1>

```diff
  「いちおうは使えるけど 2025 年 5 月現在、experimental.reactCompiler という実験的
  フラグを有効にする必要がある。
- ただし最新の Next.js ではデフォルトでRust 製のSWC でコンパイルするようになって
- るのが、このフラグを有効にするとそれが Babel に切り替わってしまう。よってただで
- さえ遅い Next.js のビルドがさらに遅くなるという弊害がある。swc のプラグインが
- リリースされて Next.js が安定版でサポートするまで待ったほうが無難かな
+ こちらは `typedRoutes` フラグとちがって安定版でも使用可能。またバージョン 15.3.1
+ から SWC による最適化が導入されたおかげで、従来のようにフラグを有効にするとビルド
+ が遅くなる問題も解決された様子。ただあくまで実験的サポートなので将来的に仕様が
+ 変わる可能性が高く、現状でも挙動があやしく開発環境と本番環境で挙動が異なるという
+ ような報告も見かける。実際のプロジェクトで採用するには安定版でサポートされるまで
+ 待ったほうが無難かな」
```

- 15-1. React でフォームの UI を実装するには / p.149

```diff
  「shadcn/ui の <Input> コンポーネントは React 組み込みの <input> を拡張したもので、props もほぼ共通してる。onChange は入力値が変更されたときに呼び出されるイベントハンドラを設定するためのものね。ここでは関数 handleInput を渡してるけど、その中で
- setFormData()
+ setRegData()
  を使って username を更新してるわけね」
```

- 15-1. React でフォームの UI を実装するには / p.153-154 / リスト66

```diff
  import { useState } from "react";
  ︙
  export default function StateForm() {
-   const [formData, setFormData] = useState<FormData>({ username: "" });
+   const [regData, setRegData] = useState<RegData>({ username: "" });
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsPending(true);

      try {
-       await registeruser(formData);
+       await registerUser(regData);
        toast("🎉️ 登録されました");
      } catch (_err) {
        toast("⚠️ 不正な入力エラー");
      } finally {
        setIsPending(false);
      }
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
      const { name } = event.target;
      const value = event.target.value;
-     setFormData((state) => ({ ...state, [name]: value }));
+     setRegData((state) => ({ ...state, [name]: value }));
    }
```

- 15-1. React でフォームの UI を実装するには / p.155-156 / リスト67

```diff
  import { useState, useTransition } from "react";
  ︙
  export default function TransitionForm() {
-   const [formData, setFormData] = useState<FormData>({ username: "" });
+   const [regData, setRegData] = useState<RegData>({ username: "" });
    const [isPending, startTransition] = useTransition();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      startTransition(async () => {
        try {
-         await registeruser(formData);
+         await registerUser(regData);
          toast("🎉️ 登録されました");
        } catch (_err) {
          toast("⚠️ 不正な入力エラー");
        }
      });
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
      const { name } = event.target;
      const value = event.target.value;
-     setFormData((state) => ({ ...state, [name]: value }));
+     setRegData((state) => ({ ...state, [name]: value }));
    }
```

- 15-1. React でフォームの UI を実装するには / p.155-156 / リスト67

```diff
  「いいね数を `count`、ユーザーがいいねをつけているかどうかを liked プロパティで
  表す likes オブジェクトをコンポーネントの state で持っていますね。それを引数で
  渡してるようですけど、
- useOptimisitic()
+ useOptimistic()
  の仕様はどうなっているんですか？」
```

- 15-3-2. React でフォームの UI を実装するには / p.190 / 脚注197
  - Zod の `main` ブランチが v4 ベースになり執筆当時のコードが `v3` ブランチにしか存在しないため、それに合わせて URL を修正

```diff
- 197 https://github.com/colinhacks/zod/blob/main/src/locales/en.ts
+ 197 https://github.com/colinhacks/zod/blob/v3/src/locales/en.ts
```

- 15-3. フォームライブラリを利用する / p.207 / 脚注205
  - Zod が v4 リリース（2022-05-20）と同時に公式サイトをリニューアル。旧 v3 に対応するサブドメインが変更されたため、それに合わせて修正

```diff
- 205 https://zod.dev/?id=superrefine
+ 205 https://v3.zod.dev/?id=superrefine
```

- あとがき / p.215

```diff
  本書の校正にはRemix Tokyo およびReact Tokyo のコミュニティでお声がけして、以下の
  方々にご協力いただきました。Coji Mizoguchi さん、Kosuke Ito さん、nkzwsh00 さん、
- takatocordelia さん、
+ takato さん、
  cordelia さん。厚く感謝いたします。
```
