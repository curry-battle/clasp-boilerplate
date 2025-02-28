## Slack Slash Command with GAS by Clasp Boilerplate

include

- clasp
- biome
- esbuild (for import)
- vitest

## How to Use

### Create GAS File

1. Create GAS file
1. Note the script ID

## Edit Code and Push

Init

```sh
npm i

mv .clasp.json.sample .clasp.json
vim .clasp.json // input your script ID
```

Push to remote GAS

```sh
clasp login
clasp push
```

Open GAS in your browser!

```sh
clasp open
```

## GAS Deployment as Web App

1. Deploy as a web app
1. Set yourself as `Run as`
    - This is probably OK.
1. Set __Anyone, Even Anonymous__ as `Who has access to the app`

   - Otherwise, `dispatch_failed` will be returned.  
   - If you cannot set it to __Anyone, Even Anonymous__, you will need to change your organization's external sharing policy from the Google Workspace Admin Console to allow sharing in the __Anyone with the link__ format.

1. After deployment, note the URL of the web app
