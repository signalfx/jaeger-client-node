#!/bin/bash

set -euo pipefail

if [[ $PWD =~ '/node_modules/@signalfx/jaeger-client' ]]; then
    rm -rf ../../jaeger-client || true
    cp -r ../ ../../
    rm -rf ../../@signalfx/jaeger-client
    if [ -z "$(ls -A ../../@signalfx)" ]; then
        rm -rf ../../@signalfx
    fi
fi
