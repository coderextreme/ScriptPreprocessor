#!/bin/env bash
pushd src/main/shell
bash ./runspp.sh 2>&1 | grep '^OUTPUTTED'
bash ./runspp.sh 2>&1 | grep '^See'
popd
