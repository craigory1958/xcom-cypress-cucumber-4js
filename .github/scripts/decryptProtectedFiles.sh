#!/bin/bash

# Recursively travel a directory and decrypt files

function traverse() {
    for src in "$1"/*
    do
        if [ ! -d "${src}" ] ; then
            echo "${src} is a file"
            echo "${#1}+1"
            dst=${src:${#1}+1:-4}
            echo "${dst}"
            # gpg --decrypt --passphrase "$(1)" --batch -o "${dst}" "${src}"
        else
            traverse "${src}"
        fi
    done
}

function main() {
    traverse "$1"
}

main "$1"
