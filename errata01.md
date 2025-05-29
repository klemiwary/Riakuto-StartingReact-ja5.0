<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 5 版』第 1 刷の正誤表・更新情報

最終更新日： 2025 年 5 月 29 日

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

現在のところ、修正箇所はありません。

<br />

## 【② React 基礎編】

現在のところ、修正箇所はありません。

<br />

## 【③ React 実践編】

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

- 14-3. React Compiler を導入する / p.140  
  Next.js バージョン 15.3.1 より React Compiler の SWC 最適化機能が導入されたため、それに合わせて修正。電子版では修正済み。  
  <https://github.com/vercel/next.js/releases/tag/v15.3.1>

```diff
  「いちおうは使えるけど 2025 年 5 月現在、experimental.reactCompiler という実験的フラグを有効にする必要がある。
- ただし最新の Next.js ではデフォルトでRust 製のSWC でコンパイルするようになってるのが、このフラグを有効にするとそれが Babel に切り替わってしまう。よってただでさえ遅い Next.js のビルドがさらに遅くなるという弊害がある。swc のプラグインがリリースされて Next.js が安定版でサポートするまで待ったほうが無難かな
+ こちらは `typedRoutes` フラグとちがって安定版でも使用可能。またバージョン 15.3.1 から SWC による最適化が導入されたおかげで、従来のようにフラグを有効にするとビルドが遅くなる問題も解決された様子。ただあくまで実験的サポートなので将来的に仕様が変わる可能性が高く、現状でも挙動があやしく開発環境と本番環境で挙動が異なるというような報告も見かける。実際のプロジェクトで採用するには安定版でサポートされるまで待ったほうが無難かな」
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
  「いいね数を `count`、ユーザーがいいねをつけているかどうかを liked プロパティで表す likes オブジェクトをコンポーネントの state で持っていますね。それを引数で渡してるようですけど、
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
  本書の校正にはRemix Tokyo およびReact Tokyo のコミュニティでお声がけして、以下の方々にご協力いただきました。Coji Mizoguchi さん、Kosuke Ito さん、nkzwsh00 さん、
- takatocordelia さん、
+ takato さん、
  cordelia さん。厚く感謝いたします。
```
