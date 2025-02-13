# how to initiate turbo project from blank repo
1. create a folder
2. npm init -y , it will create packagae.json file
3. npm install turbo --save-dev , install turbo accroding to turborepo
4. turbo.json , add this file
5. update package json `{
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint"
  },
  "devDependencies": {
    "turbo": "latest"
  },
  "packageManager": "npm@10.0.0"

}`
6. add worspace in packagejson
#"workspaces": [
    "apps/*",
  ],
  now create a folder name apps
7.install next under apps
8.install nest under apps
9.now go to next package.json  and check dev is present,becasue of  "turbo run dev",it will only trigger dev .
same goes for nest project


  "scripts": {

    "dev": "necessary command",

  },
