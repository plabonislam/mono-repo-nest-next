# How to Initiate Turbo Project from Blank Repo

1. **Create a folder**
2. **Initialize npm**
   ```bash
   npm init -y
   ```
   This will create a `package.json` file.

3. **Install Turbo as a dev dependency**
   ```bash
   npm install turbo --save-dev
   ```

4. **Create `turbo.json` file and update it**
   ```json
   {
    "$schema": "https://turbo.build/schema.json",
    "tasks": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**"]
      },
       "lint" : {

       },
      "dev": {
    
        "cache": false
      }
    }
  }
  ```

6. **Update `package.json` file**
   ```json
   {
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
   }
   ```

7. **Add workspaces in `package.json`**
   ```json
   "workspaces": [
     "apps/*"
   ]
   ```
   Now, create a folder named `apps`.

8. **Install Next.js inside `apps` folder**
9. **Install NestJS inside `apps` folder**

10. **Ensure `package.json` of Next.js and NestJS apps includes `dev` script**
   Each app should have a `package.json` with the `dev` script because `turbo run dev` will trigger it.
   ```json
   "scripts": {
     "dev": "necessary command"
   }
   ```

