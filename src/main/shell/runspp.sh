#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
bash ./runlocal.sh
bash ./runexamples.sh
