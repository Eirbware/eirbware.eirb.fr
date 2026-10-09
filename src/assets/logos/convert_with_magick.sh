#!/bin/sh

file_svg="$1"
file_png="${file_svg%.*}.png"

echo converting $file_svg to $file_png
magick -background transparent "$file_svg" -resize "1024x1024" "$file_png"
