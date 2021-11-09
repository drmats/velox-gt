# velox-gt

[Velox](https://github.com/drmats/velox) [gatsby theme](https://www.gatsbyjs.com/docs/themes/).

<br />




## contents

* `testbed`
* `gatsby-theme-velox`

<br />




## development

### add `testbed` workspace dependencies

```
yarn \
    workspace testbed \
    add gatsby react react-dom gatsby-theme-velox@*
```

### `gatsby-theme-velox` peer dependencies

```
yarn \
    workspace gatsby-theme-velox \
    add -P gatsby react react-dom
```

### run `testbed` develop script

```
yarn workspace testbed develop
```

### `testbed` production build

```
yarn workspace testbed clean
yarn workspace tesbed build
```

<br />




## license

**velox-gt** is released under the BSD 2-Clause license. See the
[LICENSE](https://raw.githubusercontent.com/drmats/velox-gt/master/LICENSE)
for more details.
