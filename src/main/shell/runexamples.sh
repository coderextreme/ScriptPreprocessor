#!/bin/bash
set -x
set -euo pipefail
IFS=$'\n\t'

# run the script preprocessor on JSON files and x3d files

. ./classpath

echo ===================SPP.js Examples================================ 1>&2
find "$EXAMPLES" -type f -name '*.json' -print0 | xargs -0 grep -lw Script | xargs ${NODE} ${NODEDIR}/SPP.mjs
