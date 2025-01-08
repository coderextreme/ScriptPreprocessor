#!/bin/bash
set -x
set -euo pipefail
IFS=$'\n\t'
bash ./runlocal.sh
bash ./runexamples.sh
