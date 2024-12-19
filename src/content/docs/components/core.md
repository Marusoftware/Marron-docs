---
title: Core and Auth
description: Core plugin system and Authentication
---
## Plugin System
The details are not decided yet, but we will specify it for many usecases.

If it is based on python module, we might use structure like this(on plugin's init file):
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

## Authentication
Authentication has a huge impact on user experiaence, I think.
So, we will support many methods to auth.

- SSO(OIDC)   
Usually called as "Login with xxxx"
- Passkey   
Passwordless key device authentication.
You can login with no user/pass input. Just insert key and use it. 
- One Time Password   
Keep protected even when your password auth was broken.
- Password auth   
Normal User/Password Authentication

You can use these auth, outside of Marron(using OIDC).
## Other Security related Features
- Encrpted user own storage
- User grouping and policy management to set content visibility