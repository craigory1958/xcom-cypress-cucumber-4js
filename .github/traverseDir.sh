#!/bin/bash

#script to recursively travel a dir of n levels

function traverseDir() {
for file in "$1"/*
do
    if [ ! -d "${file}" ] ; then
        echo "${file} is a file"
        x = ${"${file}":21}
        echo "${x} - ${file}"
        # gpg --decrypt --passphrase "$(1)" --batch -o "${x}" "${file}"
    else
        traverseDir "${file}"
    fi
done
}

function main() {
    traverseDir "$1"
}

main "$1"
