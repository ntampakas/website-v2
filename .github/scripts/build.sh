#!/bin/bash

build=$1

[ $build = "enable" ] || exit 0

aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 490752553772.dkr.ecr.eu-central-1.amazonaws.com

docker build -t pse-web .
docker tag pse-web:latest 490752553772.dkr.ecr.eu-central-1.amazonaws.com/pse-web:latest
docker push 490752553772.dkr.ecr.eu-central-1.amazonaws.com/pse-web:latest

exit 0