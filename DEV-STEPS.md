# Dev steps

## Start:

```bash
/react-ui:  npm start   # auto watch/rebuild
            npm run storybook
            npm link    # or npm install -g i .
/chromino:  npm link react-ui
```

## Finish:

```bash
/chromino:  npm unlink --no-save react-ui
/react-ui:  npm unlink  # npm uninstall  - delete global symlink
            CTRL+C  # stop
```

## Publish:

```bash
/react-ui:  ./package.json change version number
            npm publish # auto build/prepare
```
