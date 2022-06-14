#!/bin/bash

#script to recursively travel a dir of n levels

function traverseDir() {
for file in "$2"/*
do
    if [ ! -d "${file}" ] ; then
        echo "${file} is a file"
        # x = ${"${file}":21}
        # echo "${${file}:21} - ${file}"
        # gpg --decrypt --passphrase "$(1)" --batch -o "${x}" "${file}"
    else
        traverseDir "${file}"
    fi
done
}

function main() {
    traverseDir "$1" "$2"
}

main "$1" "$2"
