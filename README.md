# Repro for typescript-eslint config issue

This is a repro for a typescript-eslint bug occuring when using `project: true` with an extended config.

Affected version: >= 8.37.0  
Latest tested version: 8.38.0

```
$ yarn

$ yarn eslint
=> OK (2:16  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any)

$ yarn eslint-ci1
$ yarn eslint-ci2
$ yarn eslint-ci3
=> Error (0:0  error  Parsing error: project was set to `true` but couldn't find any tsconfig.json relative to [...])
```
