#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# run the script preprocessor on JSON files and x3d files

. ./classpath

# Now does scripts too!
echo ===================SPP.mjs Local=================================== 1>&2
find ../data -name "*.json" -print0 | xargs -0 grep -lw Script | xargs ${NODE} ${NODEDIR}/SPP.mjs
