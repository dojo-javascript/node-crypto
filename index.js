"use strict"

const crypto = require('crypto')
const fs = require('fs')

var files = [
    'images/adventuresofBatmanRobin.bin.jpg',
    'images/adventuresofBatmanRobin.bin.same.jpg',
    'images/adventuresofBatmanRobin.bin.diff.jpg',
    'images/doom.bin.jpg',
    'images/hqdefault.jpg'
]

for(const file of files) {
    console.log(getBase64Hash(
        getFileContent(file)
    ), file)
}

function getBase64Hash(content) {
}

function getFileContent(filepath) {
}