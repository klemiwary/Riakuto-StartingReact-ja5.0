<!-- markdownlint-disable MD029 -->

# Windows 環境で mise をセットアップする

最終更新日： 2025 年 7 月 10 日

Windows 環境で React アプリケーション開発をするには [WSL](https://learn.microsoft.com/ja-jp/windows/wsl/about)（<u>W</u>indows <u>S</u>ubsystem for <u>L</u>inux）で Ubuntu をインストールするのが望ましいのですが、初心者には敷居が高く、メンテナンスし続けるのも楽ではありません。

そこでここでは、Windows のネイティブ環境に [mise](https://mise.jdx.dev/)をインストールする手順を紹介します。mise は Python や Node.js といったランタイムを始めとした各種ツールの統合的なバージョンマネージャです。macOS や Linux での環境がメインターゲットですが、限定的ながら Windows もサポートしています。

最初に、この手順に用いるソフトウェアを以下に紹介しておきます。

- [**WinGet**](https://learn.microsoft.com/ja-jp/windows/package-manager/winget/) …… Windows 標準パッケージマネージャ）
- [**PowerShell 7【PowerShell Core】**](https://learn.microsoft.com/ja-jp/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5) …… ターミナル
- [**mise【mise-en-place】**](https://mise.jdx.dev/) …… ランタイムバージョンマネージャ

OS 環境としては、Windows 11 および Windows 10 の 2020 年 5 月以降のアップデートを適用したバージョンを対象としています。Windows 10 をお使いの方は、最新の Windows Update を適用しておいてください。

<br />

## 1. WinGet の確認

先述した Windows の環境では標準パッケージマネージャの WinGet がすでにインストールされているはずです。コマンドプロンプトで以下を入力して確認してください。

```powershell
winget --version
```

もしコマンドが見つからないようなら、Microsoft Store から「[アプリ インストーラー](https://apps.microsoft.com/detail/9nblggh4nns1?hl=ja-JP&gl=JP)」をインストールしてください。

## 2. PowerShell 7 のインストール

mise の Windows 版は PowerShell Core（7.x 系）を前提として動作するように作られており、Windows にデフォルトでインストールされている Windows PowerShell（5.x 系）では正しく動作しません。同じ「PowerShell」という名前でまぎらわしいのですが、バージョン 7.x 系の PowerShell Core をあらかじめインストールしておく必要があります。

コマンドプロンプトで以下のコマンドを入力して、PowerShell Core をインストールします。

```powershell
winget install Microsoft.PowerShell
```

タスクバーの検索ボックスから「powershell」で検索して「<img src="../images/PowerShell_Core_icon.png" width="25" alt="PowerShell Core アイコン" style="vertical-align: bottom;"> PowerShell 7 (x64)」という表示が見つかればインストール成功です。  
これ以降、旧バージョンの「<img src="../images/Windows_PowerShell_icon.png" width="25" alt="PowerShell Core アイコン" style="vertical-align: bottom;"> Windows PowerShell (x86)」をまちがって起動しないようにしてください。

## 3. mise のインストールと設定

_（参考：「[Installing Mise | mise-en-place](https://mise.jdx.dev/installing-mise.html#windows-winget)」）_

PowerShell 7 を起動して、以下のコマンドを入力します。

```powershell
winget install jdx.mise
```

PowerShell 起動時に mise のアクティベートを行うよう設定

```powershell
echo 'mise activate pwsh | Out-String | Invoke-Expression' >> $PROFILE
```

PowerShell を開き直して `mise --version` を実行し、バージョン番号が表示されればインストール成功。あとは本文の手順と同様、mise を使って Node.js をインストールする。

```powershell
mise use -g node
```
