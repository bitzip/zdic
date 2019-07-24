#! /bin/bash

cd "$(dirname "$0")"
cd src
zip -r package.zip .
mv package.zip ..
