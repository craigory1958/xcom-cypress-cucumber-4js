#!/bin/bash

#script to recursively travel a dir of n levels

function traverseDir() {
for file in "$1"/*
do
    if [ ! -d "${file}" ] ; then
        echo "${file} is a file"
    else
        echo "entering recursion with: ${file}"
        traverseDir "${file}"
    fi
done
}

function main() {
    traverseDir "$1"
}

main "$1"
