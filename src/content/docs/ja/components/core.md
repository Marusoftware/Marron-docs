---
title: Core と Auth
description: プラグインシステムと認証
---
## プラグインシステム
まだ詳細は決まっていませんが、様々な使用方法に対応できるものにしよう考えています。

もし、これをPythonのモジュールのようにするのであれば、プラグインのinitファイルにてこのような構造を用いるかもしれません:
```python
class Dependency:
    name: str # plugin id
    feature: str # which feature will activate with this plugin

__name__="plugin_name"
__required__=[str or Dependency]
__optional__=[str or Dependency]

def activate():
def deactivate():
```

## 認証
認証はユーザ体験にとても大きな影響を及ぼすと考えています。
そのため、まずは多くの認証方法をサポートします。

- SSO(OIDC)   
よく "xxxx でログイン" と表記されるものです。
- Passkey   
パスワードなしに専用のキーデバイスで認証を行うものです。
ユーザ名とパスワードを入力する必要なく、ただ専用デバイスを使用して認証するだけです。
- One Time Password   
もし、パスワードがバレてしまっても、引き続き保護されます。
- Password auth   
通常のユーザ名とパスワードによる認証です。

これらの認証は、Marron 外部からでも OIDC を用いて利用できます。
## その他のセキュリティに関連する機能
- 暗号化されたユーザのためのストレージ
- ユーザグループの形成と、コンテンツへのアクセス制御