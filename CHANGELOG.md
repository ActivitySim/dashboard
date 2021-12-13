# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.3.2](https://github.com/simwrapper/simwrapper/compare/v1.3.1...v1.3.2) (2021-12-13)


### Bug Fixes

* **xy:** Ask for coordinate system if loading output_trips ([c1b5e91](https://github.com/simwrapper/simwrapper/commit/c1b5e91645da62380fc8134c119bd17fb10e6057))

## [1.3.1](https://github.com/simwrapper/simwrapper/compare/v1.3.0...v1.3.1) (2021-12-09)


### Features

* **heatmap:** Heatmap learned flipAxes true/false, to flip the heatmap :-) ([5aa3c07](https://github.com/simwrapper/simwrapper/commit/5aa3c0789fa7118f532832cefea072e7c88bc656))

## [1.3.0](https://github.com/simwrapper/simwrapper/compare/v1.1.0...v1.3.0) (2021-12-09)


### Features

* **dashboard:** Charts can zoom/unzoom fullscreen now ([2587521](https://github.com/simwrapper/simwrapper/commit/2587521053270a1b897c93ed4c12c2b65bda7ba2))
* Support multiple local servers on ports 8000-8500 ([8ca422f](https://github.com/simwrapper/simwrapper/commit/8ca422f4e262027bae5a87d8c3386fe6fb0bef33))


### Bug Fixes

* Fix [#71](https://github.com/simwrapper/simwrapper/issues/71), DrawingTool broke with big Vite merge ([9f23d79](https://github.com/simwrapper/simwrapper/commit/9f23d79d660e9955cbf9e6f3774c84d26fadf189))
* Fix dark/light mode watcher in dashboard charts ([1291ef7](https://github.com/simwrapper/simwrapper/commit/1291ef724861f7ee5e112176747f45cbe3e9f226))
* Plotly charts don't resize properly when switching dashboard tabs ([affccab](https://github.com/simwrapper/simwrapper/commit/affccab53759107d8256bad8db733078c88c77fc))
* **sankey:** handle commas,semicolons,tabs as separators ([8b2cacb](https://github.com/simwrapper/simwrapper/commit/8b2cacbf900e7c5113e463e82a93874c88526269))
* **sankey:** plot size on Chrome/Safari ([5a31fb0](https://github.com/simwrapper/simwrapper/commit/5a31fb038a092253c860a7d0aff9d953ed9827fd))
* **sankey:** Sankey text colors follow dark/light theme now ([5500a8d](https://github.com/simwrapper/simwrapper/commit/5500a8d91a815f9c6022d2c28e02147f526db1ac))
* useLastRow and ignoreColumns are leaking into other dashboard views ([1d690b2](https://github.com/simwrapper/simwrapper/commit/1d690b25fd868ac8acbad7892835128ea793df1e)), closes [#75](https://github.com/simwrapper/simwrapper/issues/75)
* video-player resizing bugs ([e480798](https://github.com/simwrapper/simwrapper/commit/e48079806acdcf30347be6719f2072dc13960b49))
* Vite: faster builds & fewer dependencies ([a4d92c0](https://github.com/simwrapper/simwrapper/commit/a4d92c0c7c9bbc7aa88770ff1ada75ae4e366b5d))

## [1.1.0](https://github.com/simwrapper/simwrapper/compare/v1.0.1...v1.1.0) (2021-11-24)


### Features

* New "heatmap" chart type ([c15b21f](https://github.com/simwrapper/simwrapper/commit/c15b21fdf2fbe711ca7ccddaae53a4c956c02cdd))


### Bug Fixes

* Back Button Bug ([#59](https://github.com/simwrapper/simwrapper/issues/59)) ([89d12d5](https://github.com/simwrapper/simwrapper/commit/89d12d50a1813d6dc265001f4a99b7b5ddc0b0db))

### [1.0.1](https://github.com/simwrapper/simwrapper/compare/v1.0.0...v1.0.1) (2021-11-08)

* Fix Stacked Bar Chart [edbe0a2](https://github.com/simwrapper/simwrapper/commit/edbe0a205a87fde1b23ab118d384804dec5c98e9))

## 1.0.0 (2021-11-03)

We are starting to use "semantic versioning" now, so we can track builds since our number of users is increasing.

Version numbers are MAJOR.MINOR.POINT where

- MAJOR: major new releases; breaking changes, etc
- MINOR: feature releases, new functionality
- POINT: bugfixes and internal improvements

This seems as good a time as any to stamp a "1.0.0" release. Woot!

### Features

* Color schemes ([3d19f36](https://github.com/simwrapper/simwrapper/commit/3d19f36ee96b6bfc475743ab68678f532d9b61a7))
* **carriers:** update carrier viewer for simwrapper ([4090e20](https://github.com/simwrapper/simwrapper/commit/4090e20e82846ee622c4ca8d77fb9ae0d4208744))
* **charts:** allow relative paths for dataset ([2350993](https://github.com/simwrapper/simwrapper/commit/235099307efb6370239e445454a426cd62d6e4fc))
* **dash:** Area charts ([d715ea5](https://github.com/simwrapper/simwrapper/commit/d715ea575865fd01ecabb14f25ae12b6ffe7f620))
* **dash:** Choro-CIRCLES plot on map! ([40b4b1c](https://github.com/simwrapper/simwrapper/commit/40b4b1ccdb395dd16df0e1c7350ff1a997d496c6))
* **dash:** Choropleth maps! ([fe43f09](https://github.com/simwrapper/simwrapper/commit/fe43f09d64cb337c1b5468e4472909b335b5d0bb))
* **dash:** fullscreen button on card headers ([e252f8e](https://github.com/simwrapper/simwrapper/commit/e252f8ecae07a24ac3cc433d951fef4fd4f6ae31))
* **dash:** Load any dashboard from /gist/123456789 ([5668974](https://github.com/simwrapper/simwrapper/commit/56689741068344e36c1f2385e663b8641ee1499a))
* **dash:** Tabbed dashboards! ([96acf3e](https://github.com/simwrapper/simwrapper/commit/96acf3efe2efb8c14a8ff861e73985ac7259a939))
* **flowmap:** FlowMap based on FlowmapBlue (WIP) ([f667347](https://github.com/simwrapper/simwrapper/commit/f66734762da91201fbac749cd7d50c24d2ce8a07))
* **topsheet:** allow hard-coded paths in topsheet config ([0472807](https://github.com/simwrapper/simwrapper/commit/04728074ae1ba9f9d3111a38f6d5078fb971ef7a))
* add [@filter](https://github.com/filter) to topsheet calcs ([5aa8623](https://github.com/simwrapper/simwrapper/commit/5aa86231730363af826325ad6196b86a189828dd))
* Add DrawingTool to XY plot ([065e198](https://github.com/simwrapper/simwrapper/commit/065e1988d83df73c9271822c0bec8c9bf7b46ab0)), closes [#39](https://github.com/simwrapper/simwrapper/issues/39)
* add EN/DE locale support ([161897f](https://github.com/simwrapper/simwrapper/commit/161897f09dc8e6a3337e8cdd6eb40baac81460df))
* Dark mode! ([0556c2c](https://github.com/simwrapper/simwrapper/commit/0556c2ca53019fb012aa053a941827f7e847e630))
* Move main site to https://vsp.berlin/simwrapper ([5782022](https://github.com/simwrapper/simwrapper/commit/5782022084472258bd3a8f46cf218ed276ea2622))
* new Vega-Lite charting plugin ([16d25f4](https://github.com/simwrapper/simwrapper/commit/16d25f43aaa7c983a84c81f26f4dabe687788e81))
* run-finder panel treeview ([d8725db](https://github.com/simwrapper/simwrapper/commit/d8725dba0bd96b0c7b57ce9cf755b61eccbb5ae7))
* Show transit viewer thumbnail whenever *output_transitSchedule* is present ([f67f38c](https://github.com/simwrapper/simwrapper/commit/f67f38cfed0e19b7663b22be555c329be0fddf4b))
* topsheet filters ==,<=,>=,!=,<,> ([866a1c0](https://github.com/simwrapper/simwrapper/commit/866a1c0516742617031ef0e5c6cb92d3088ad5d6))
* topsheet title comes from title/title_en/title_de fields ([3d7e25f](https://github.com/simwrapper/simwrapper/commit/3d7e25fa904a8b7bae977bc0bf7c63fb3d4d3130))
* Try to find coordinate system in output_config.xml ([5ce8766](https://github.com/simwrapper/simwrapper/commit/5ce8766a73e69583444d465c67c1cc56c8170359))
* **carriers:** add shipment tooltips and drive on left/right side ([fd7d056](https://github.com/simwrapper/simwrapper/commit/fd7d056e13827a2e79eedc9f6d21115a2bfb5505))
* **carriers:** fix [#8](https://github.com/simwrapper/simwrapper/issues/8) - add +/- to carriers treeview ([fcb7d57](https://github.com/simwrapper/simwrapper/commit/fcb7d57b0a51cd85eead749c75519514794e66c6))
* **dash:** Topsheet + Pie are more or less working ([3698bc1](https://github.com/simwrapper/simwrapper/commit/3698bc1ab775e9d151c1395347262850cbce9c73))
* **shapefile:** a bit better at guessing CRS projections ([209e060](https://github.com/simwrapper/simwrapper/commit/209e060463919a2a91a1fc905ced19439f8f1a70))
* **shapefile:** Add opacity slider ([5df86a8](https://github.com/simwrapper/simwrapper/commit/5df86a89e4728db785cca07268819b755208add9)), closes [#38](https://github.com/simwrapper/simwrapper/issues/38)
* **video:** add video plugin ([442c408](https://github.com/simwrapper/simwrapper/commit/442c408a6eafba9b1b5c20f9caa34a57d4858e10))
* **video:** video player plugin ([c250a11](https://github.com/simwrapper/simwrapper/commit/c250a117c87df0ac54374c5d0b48a66cd3454183))


### Bug Fixes

* Charts learned dark/light modes ([97c77fc](https://github.com/simwrapper/simwrapper/commit/97c77fc0ad8468f725c46693ab62fc6d5cbf58c2))
* **carriers:** fix [#1](https://github.com/simwrapper/simwrapper/issues/1) use link midpoint for shipment locations ([3e589f6](https://github.com/simwrapper/simwrapper/commit/3e589f6ac2108d971830e107e1f5a2b972e80fae))
* **dash:** allow map geojson to be on Url or local file path ([17e79e6](https://github.com/simwrapper/simwrapper/commit/17e79e6c77c78df42bdd4f9a5ba055f74446decc))
* **dash:** bg colors in dark mode ([f6b5776](https://github.com/simwrapper/simwrapper/commit/f6b57766cc96ca421f53f06d5d93d9f16d843df7))
* **dash:** Dashboard max 110rem width. Too wide is too wide. ([ec4dcaf](https://github.com/simwrapper/simwrapper/commit/ec4dcaf3c85cfbeb0b61febdc3dbc23a840d3e93))
* **dash:** loose threads causing bad card reloads ([90c74ed](https://github.com/simwrapper/simwrapper/commit/90c74ede9e4f44c974418685e991f2acd4c99073))
* **dash:** nicer shape/circle buttons ([81a2e46](https://github.com/simwrapper/simwrapper/commit/81a2e46faf48513a1eff1cb78f3f562e30d68775))
* **dash:** No need for dashboards to have a max width ([79d6d9d](https://github.com/simwrapper/simwrapper/commit/79d6d9d979a6ccd07b861efe0acc17f5e8ea55db))
* **dashboard:** links-gl layout improvements ([af78cde](https://github.com/simwrapper/simwrapper/commit/af78cde06389bad2677f6d33bc50f6a8f7d21aa0))
* **links:** column names with hours were being mangled ([f61a6fd](https://github.com/simwrapper/simwrapper/commit/f61a6fdce905e0c71b31613c0b0240099f950877))
* **links:** config panel layout ([eb8b6ec](https://github.com/simwrapper/simwrapper/commit/eb8b6ec1fed9d1c03a9188755d8f04b99f13b124))
* **links:** config panel layout ([0d750f0](https://github.com/simwrapper/simwrapper/commit/0d750f0a159a9db9c78a407bcc8f3658f612e34b))
* **links:** diff plots are always red/blue now ([5903c4c](https://github.com/simwrapper/simwrapper/commit/5903c4c11efca3c452029acf8a6a858245dce092))
* **links:** handle .gz and non-.gz inputs ([fd44328](https://github.com/simwrapper/simwrapper/commit/fd44328c889b8e353e745ec8915b475af1a23ef3))
* **links:** thumbnail images ([3e0324a](https://github.com/simwrapper/simwrapper/commit/3e0324a2c6ec89d1423d053664be007f1b2233f3))
* **links:** time-slider was too narrow ([218cac7](https://github.com/simwrapper/simwrapper/commit/218cac72012aa0b9f937bd36689993d8da0e59ae))
* **links:** use network center ([7a7d86a](https://github.com/simwrapper/simwrapper/commit/7a7d86a93b366b3516b039f21d2030899090be7a))
* **shapefile:** guess more EPSG codes ([e941f07](https://github.com/simwrapper/simwrapper/commit/e941f072a982fa87fc416584028aece6ec27279d))
* back button is broken ([109d672](https://github.com/simwrapper/simwrapper/commit/109d672402a22affd1492b2cad2671d6b1f4d722)), closes [#21](https://github.com/simwrapper/simwrapper/issues/21)
* better navigation when clicking on viz thumbnails ([d5a7892](https://github.com/simwrapper/simwrapper/commit/d5a78924509e1f73dd45732e2178f60a011f6d37))
* dashboard tabs sometimes show old labels ([8804b2a](https://github.com/simwrapper/simwrapper/commit/8804b2a4f6fee57f1cf813235f894a01e4312128))
* Draw shapefile exports as EPSG:31468 instead of WGS84 (needs work) ([9176141](https://github.com/simwrapper/simwrapper/commit/9176141e2f9e6c034331c2228abd7301ccb1a508))
* draw tool should not hide underlying layers ([89b9fde](https://github.com/simwrapper/simwrapper/commit/89b9fde9bd04df534eb9059e69a163da11aff061))
* **transit:** try to find correct transitSchedule, network, demand files ([8a4beef](https://github.com/simwrapper/simwrapper/commit/8a4beefcf75a00fa6d93f737c0255d044217ab94))
* clean up RunFinder layout ([c03ef5c](https://github.com/simwrapper/simwrapper/commit/c03ef5caa4970f58dc83e5be57aca293725f5f96))
* gist viewer wasn't loading ([3d194f5](https://github.com/simwrapper/simwrapper/commit/3d194f5fc87b185268d57a55f663397d46b1c5f0))
* host font-awesome locally so site works offline ([af0b4d7](https://github.com/simwrapper/simwrapper/commit/af0b4d701e9887ea519aabef71cdd635d181fde6))
* shapefile drawer should export as WGS84, always ([f75c202](https://github.com/simwrapper/simwrapper/commit/f75c202791c36e44f38ee554ce0c1c1388e63f96)), closes [#29](https://github.com/simwrapper/simwrapper/issues/29) [#31](https://github.com/simwrapper/simwrapper/issues/31)
* shapefile tooltip ([4222877](https://github.com/simwrapper/simwrapper/commit/42228772643c99aff27be6a8a467c115684e66aa))
* shapefile zoom and tooltip ([705a233](https://github.com/simwrapper/simwrapper/commit/705a233bd1e98dd48eccdad41fb947ae70c7d7e2))
* thumbnail image heights ([55132d8](https://github.com/simwrapper/simwrapper/commit/55132d896d53d42b8b97e3fc31bd64d8c90fc26d))

### 0.1.1 (2020-08-25)

### Features

- **video:** add video plugin ([442c408](https://github.com/simwrapper/simwrapper.github.io/commit/442c408a6eafba9b1b5c20f9caa34a57d4858e10))
- **video:** video player plugin ([c250a11](https://github.com/simwrapper/simwrapper.github.io/commit/c250a117c87df0ac54374c5d0b48a66cd3454183))
