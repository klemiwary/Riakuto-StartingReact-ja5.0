<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 5 版』第 1 刷の正誤表・更新情報

最終更新日： 2025 年 7 月 16 日

### ご注意点

- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 1 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【① 言語・環境編】

- 1-2. React のプロジェクトを作成する / p.33

```diff
  JSX ファイルってことで、コンパイルを経て最終的にJavaScript コードに変換されるのね。
  ちょっとブラウザで
- http://localhost:5173/src/App.tsx
+ http://localhost:5173/src/main.tsx
  にアクセスしてみてくれる？」
「おおー、なんかすごい読みづらい JavaScript のソースが表示されました！ これが
- App.tsx
+ main.tsx
  のコンパイル後の姿ですか……」
```

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

- 2-6-1. 分割代入とスプレッド構文 / p.80 / リスト25

```diff
  console.log(users);
  // [
  // { id: 1, name: 'Patty Rabbit', email: 'patty@maple.town' },
  // { id: 2, name: 'Rolley Cocker', email: 'rolley@palm.town' },
- // { id: 3, name: 'Bobby Bear', email: 'bobby@maple.town' }
+ // { id: 3, name: 'Bobby Kumanov', email: 'bobby@maple.town' }
  // ]
```

- 3-3-3. カリー化と関数の部分適用 / p.119

```diff
- リスト57: 06-first-class/partially.js
+ リスト57: 03-first-class/partially.js
```

- 4-4-2. ユニオン型とインターセクション型 / p.171 / リスト84

```diff
- interface A = {
+ interface A {
    foo: number;
    bar?: string;
  }
```

- 4-4-3. 型の Null 安全性を保証する / p.175

```diff
  「ふむふむ。JavaScript も後方互換性を大事にする言語でしたけど、
- TyptScript
+ TypeScript
  もその文化を受け継いでるのかもしれませんね。
```

- 4-5-2. 条件付き型とテンプレートリテラル型 / p.181

```diff
  「ここでの extends は、関数
- override()
+ overMerge()
  の第 2 引数 obj2 の型を定義している型引数 U が第1引数の型 obj1 の型 T と同じか継承したものでなければならないことを示唆するもの。
```

- 4-5-2. 条件付き型とテンプレートリテラル型 / p.181 / リスト94

```diff
  interface User { id: unknown }
  type NewUser = User & { id: string };
  type OldUser = User & { id: number };
- interface Book = { isbn: string }
+ interface Book { isbn: string }

  type IdOf<T> = T extends User ? T['id'] : never;
```

- 4-6-1. as による型アサーション / p.192

```diff
  「うん。ただこれも抜け道があって、(someValue as unknown) as SomeType のようにいったん
- unkonwn 型
+ unknown 型
  を挟む形で二重アサーションを行えばコンパイルは通ってしまうの」
```

<br />

## 【② React 基礎編】

- 5-1-4. JSX は汎用的にUI を表現する / p.22 / リスト4

```diff
- iimport { StrictMode } from 'react'
+ import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.tsx'
```

- 5-2-1. JSX の基本的な文法 / p.25 / リスト6

```diff
  | ReactElement | string | number | Iterable<ReactNode> | ReactPortal
- | boolean | null | undefined | Promise<AwaitedReactNode>;
+ | boolean | null | undefined | Promise<AwaitedReactNode>;;
```

- 8-1-3. shadcn/ui の環境を構築する / p.96 / リスト32

```diff
  - <button onClick={() => setCount((count) => count + 1)}>
  + <Button onClick={() => setCount((count) => count + 1)}>
      count is {count}
- - </Button>
- + </button>
+ - </button>
+ + </Button>
```

- 8-2. コンポーネントにProps を受け渡す / p.105

```diff
  「あっ、高校名が変更されると同時に PlayerList コンポーネントとその子孫コンポーネント群の枠が一瞬光りました！
-  これが再レンダリングされたコンポーネントなんですね。でも props が更新された PlayerList
-  はわかるんですけど、他のコンポーネントも再レンダリングされたのはなぜですか？」
- 「うん。まず高校名が表示される `Title` コンポーネントに関しては、school が子要素になってる。
-  子要素は実は children という名前の props というのはすでに説明したよね」
- 「言われてみれば。いま思い出しました」
- 「加えて今回の冒頭で話した、コンポーネントが再レンダリングされる 3 つのケースを思い出して。
- 3 つめは『親コンポーネントが再レンダリングされた場合』だったでしょ。`Title` コ>ンポーネント
- もそうだし、選手情報が表示されているコンポーネントもこれに合致する」
- 「なるほど。React ではあるコンポーネントが再レンダリングされると、その子々孫々のコンポー
- ネントも道連れに再レンダリングされるんですね」
+ これで再レンダリングされたコンポーネントがわかるんですね。でも props が変更された PlayerList
+ コンポーネントはわかるんですけど、アバターの枠も光ってますよね。school の値と無関係の
+ ところに思えるんですが、なぜここも再レンダリングされるんでしょうか？」
+ 「コンポーネントが再レンダリングされる 3 つのケースを思い出して。3 つめは『親コンポーネント
+ が再レンダリングされた場合』だったでしょ。この `Avatar` コンポーネントもこれに合致するよね」
+ 「なるほど。React ではあるコンポーネントが再レンダリングされると、必要がなくてもその子々孫々
+ のコンポーネントも道連れに再レンダリングされるんですね」
  「そのとおり。
+ ただ子孫コンポーネントの不必要な再レンダリングを防ぐための機能も React には用意されてる。
+ それについてはまたの機会にじっくり説明してあげるよ。
  じゃ次は同じようにツールから props の `players` を開いて 4 つめのミッチーのデータで `new entry` を `height` に書き換えて、値を `""` から `184` に設定して Enter キーを押してみて」
```

- 8-4. コンポーネントの基本を学ぶ / p.114 / リスト38

```diff
  import { useEffect, useState } from 'react';
  import { RotateCw } from 'lucide-react';
- import { Button } from '@/components/ui/button.tx';
- import { Card, CardContent, CardHeader } from '@/components/ui/card.tx';
+ import { Button } from '@/components/ui/button.tsx';
+ import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
```

- 8-5. React におけるコンポーネントの構文の変遷 / p.118 / リスト39

```diff
  import { useEffect, useState } from 'react';
  import { RotateCw } from 'lucide-react';
- import { Button } from '@/components/ui/button.tx';
- import { Card, CardContent, CardHeader } from '@/components/ui/card.tx';
+ import { Button } from '@/components/ui/button.tsx';
+ import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
```

- 9-1-4. ESLint の環境をさらにカスタマイズ / p.145 / リスト46

```diff
  },
  rules: {
-   ...pluginReactConfig.rules,
+   ...pluginReact.configs.flat.recommended.rules,
    ...pluginHooks.configs.recommended.rules,
    ...pluginRefresh.configs.recommended.rules,
```

- 9-1-4. ESLint の環境をさらにカスタマイズ / p.147-148 / リスト49

```diff
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
      'import/extensions': [
        'error',
+       'ignorePackages',
        {
          js: 'always',
          jsx: 'always',
          ts: 'always',
          tsx: 'always',
          ignorePackages: true,
        },
      ],
```

- 9-2-2. Prettier の環境を作る / p.164

```diff
  「prettier コマンドのオプションも公式サイトに一覧があるので確認しておいてね。ここで使ってる
  --write はファイルを上書きする
- 、--ignore-unknown はマッチしなかったパターンがあってもエラーを出さないための
  オプションね
- 。2 つを併せて -wu と書くこともできる
  」
```

- p.164 / 脚注

```diff
  239 「CLI · Prettier」https://prettier.io/docs/en/cli
- 240 「CLI · Prettier」https://prettier.io/docs/en/cli
+ 240 「Plugins · Prettier」https://prettier.io/docs/plugins
```

- 10-2-4. Remix（React Router v7 以降）/ p.200 / リスト内

```diff
        <Form method="post">
-         <input type="text" name="name" defaultValue={product.name}" />
-         <input type="number" name="price" defaultValue={product.price}" />
+         <input type="text" name="name" defaultValue={product.name} />
+         <input type="number" name="price" defaultValue={product.price} />
          <button type="submit">Save</button>
        </Form>
```

- 10-2-5. どのメタフレームワークを採用するべきか / p.210

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

- 12-3-2. Route Loaders でのデータ取得 / p.98 / リスト内

```diff

  + export function headers(_: Route.HeadersArgs) {
- +   return { "Cache-Control": "public, max-age=6000, s-maxage=6000" };
+ +   return { "Cache-Control": "public, max-age=3600, s-maxage=3600" };
  + }

```

- 12-1-2. アプローチからデータ取得手法を分類する / p.84

```diff
  Render よりも有利だけども、FCP はどうしても長くなってしまう」
  「つまりクリックしてからページ遷移まで固まってる
+ 時間
  が長いと」
  「そうだね。そしてここまで出てきた各種の問題を解消するべく編み出されたのが
```

- 12-4-1. SPA でのSuspense / p.100 / 脚注104

```diff
- 104 「10-2-5. サーバサイドでの React 運用にどのフレームワークを採用するべきか」で触れています。
+ 104 「10-2-5. どのメタフレームワークを採用するべきか」で触れています。
```

- 12-4-1. SPA での Suspense / p.105

```diff
  でもそれが React が尊重するコンポーネントの Composability とか独立性といった価値観を
  損なうことになるのでは
+ ないかという
  秋谷さんの疑問は妥当だね。
```

- 12-4-3. Route Loaders と Suspense / p.110

```diff
  その値を用いて遅延レンダリングされるのはクライアントサイドになるため。用意した実際の
  コードを
- 参照ながら
+ 参照しながら
  説明しよう。
```

- 12-4-3. Route Loaders と Suspense / p.112

```diff
  「まあ Client Components でSuspense を扱う以上、それは仕方ないとあきらめるしかないね。
  React Router も
- 7.2 で Server Components に対応するので、
+ 近く Server Components をサポートする予定なので、
  データ取得処理を内包する Server Components を Route Loaders から渡すようにすれば、
  スッキリ書けるようになる」
```

13-1. Error Boundary とは / p.114 / 脚注120

```diff
- 120 「Component – React」>「componentDidCatch(error, info)」
+ 120 「Component – React」>「static getDerivedStateFromError(error)」
  https://ja.react.dev/reference/react/Component#static-getderivedstatefromerror
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

- 14-2. 関数定義をメモ化する / p.136

```diff
  「そう。useRef() の戻り値 RefObject オブジェクトは current という書き換え可能の
  プロパティを持つので、その値にインターバル ID を格納する。
- setInterval() が返すインターバル ID は正の整数なので useRef() には初期値として 0 を入れ、
+ setInterval() が返すインターバル ID には初期値として null を入れておき、
  リセットされたときに実際のインターバル ID が入っていればその値で clearInterval()
  を実行するわけね」
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

- 15-1-1. プリミティブな React フォーム / p.146 / リスト65

```diff
- リスト 65: 03-form/raw-form/src/components/RegistrationForm.tsx
+ リスト 65: src/components/RegistrationForm.tsx
```

- 15-1-1. プリミティブな React フォーム / p.149

```diff
  「shadcn/ui の <Input> コンポーネントは React 組み込みの <input> を拡張したもので、props もほぼ共通してる。onChange は入力値が変更されたときに呼び出されるイベントハンドラを設定するためのものね。ここでは関数 handleInput を渡してるけど、その中で
- setFormData()
+ setRegData()
  を使って username を更新してるわけね」
```

- 15-1-1. プリミティブな React フォーム / p.150

```diff
  「handleInput は zipcode の onChange にも渡してるでしょ。
- イベントから id を抽出して、
+ イベントから要素の name 値を抽出して、
  それを state 更新のキーにすることで汎用的に作ってるの。
```

- 15-1-2. フォームのステータスを管理する / p.153-154 / リスト66

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

- 15-1-3. フォーム操作の UI への反映のタイミングをずらす / p.165

```diff
  「いいね数を `count`、ユーザーがいいねをつけているかどうかを liked プロパティで
  表す likes オブジェクトをコンポーネントの state で持っていますね。それを引数で
  渡してるようですけど、
- useOptimisitic()
+ useOptimistic()
  の仕様はどうなっているんですか？」
```

- 15-2-2. Action にまつわる状態管理を行う / p.172

```diff
  「なるほど。残りの permalink と isPending は？」
  「戻り値の第 3 要素 isPending は
- 第 2 引数の `action` が
+ 第 1 引数の `action` が
  実行中のときに `true` になるフラグだね。
```

- 15-2-3. React Router のRoute Actions を使う / p.177

```diff
  「引数の型になってる Route.ActionArgs は、以下のインターフェースをベースに生成された
  ものになってる。
- action
+ loder()
  の引数と内容は同じだね」
```

- 15-2-3. React Router の Route Actions を使う / p.182

```diff
  このメソッドでは該当ルートの loader() のみが実行される。なおパスにはクエリパラメータ
- も記述も
+ の記述も
  可能になってる」
  「submit() にもありましたけど、オプションの flushSync というのは？」
```

```diff
  でも fetcher.load() でそれ以外の loader() を実行した場合、fetcher.data は型アサーション
  による手動での型整合を
- しなくと
+ しないと
  いけなくなるので気をつけてね」
「わかりました。
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
