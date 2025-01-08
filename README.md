# ScriptPreprocessor
Convert X3D Scripts to HTML scripts.

Help is requested to improve src/main/node/Script.js.

# configuration

Modify the settings in src/main/shell/classpath to suit your needs

# Installation

Clone the repo:

```
git clone https://github.com/coderextreme/ScriptPreprocessor
```

Get node and npm. Run:
```
npm install
```
Then to create the JavaScript files, run
```
bash build.sh
```

Run the following for a list of errors
```
bash build.sh 2>&1 |grep ^See
```

local data files are in src/main/data/*.json  Configure your example folder in src/main/shell/classpath

Look for *.good.js in src/main/spp and src/main/www.web3d.org/spp for good JavaScript conversions from JSON.

Please patch *.bad.js in src/main/spp and src/main/www.web3d.org/spp by modifying src/main/node/Script.js

X3D JSON files can end in .json.  .x3dj is not currently supported.

# Test Scripts found in src/main/shell

* classpath  -- configure environment
* runexamples.sh -- Run Web3D examples, found here: http://www.web3d.org/x3d/content/examples/X3dExampleArchivesJsonScenes.zip
* runlocal.sh -- run local examples in src/main/data
* runspp.sh -- run runlocal.sh and runexamples.sh
