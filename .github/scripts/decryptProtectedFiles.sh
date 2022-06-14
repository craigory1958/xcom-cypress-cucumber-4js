#!/bin/bash

# Recursively travel a directory and decrypt files

function traverse() {
pathLen=${#$1}+1
for src in "$1"/*
do
    if [ ! -d "${src}" ] ; then
        echo "${src} is a file"
        dst=${src:${pathLen}}
        echo "${dst}"
         # gpg --decrypt --passphrase "$(1)" --batch -o "${x}" "${src}"
    else
        traverse "${src}"
    fi
done
}

function main() {
    traverse "$1"
}

main "$1"
