#!/bin/bash
set -x
set -euo pipefail
IFS=$'\n\t'
bash ./runexamples.sh
bash ./runlocal.sh
