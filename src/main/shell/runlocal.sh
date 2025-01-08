#!/bin/bash
set -x
set -euo pipefail
IFS=$'\n\t'

# run the script preprocessor on JSON files and x3d files

. ./classpath

# Now does scripts too!
echo ===================SPP.js Local=================================== 1>&2
ls ../data/*.json | grep -v intermediate | grep -v "\.new" | xargs grep -lw Script | xargs ${NODE} ${NODEDIR}/SPP.js
