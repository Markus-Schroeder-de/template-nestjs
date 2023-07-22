#! /bin/sh
# slow build process: You could add the Key and download & install the latest package
# or fast build process: you could install the .deb-package version 8.7.1 from the .devcontainer
fast=true
pnmp=false

npm i -g @nestjs/cli
npm i

#echo ">>>> install CLoudFoundry-cli (cf8-cli) ... "
#echo "More Info: https://github.com/cloudfoundry/cli/wiki/V8-CLI-Installation-Guide"

#if $fast; then
#    dpkg -i .devcontainer/cf8-cli-installer_8.7.1_x86-64.deb
#else
#    curl https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key > /usr/share/keyrings/cli.cloudfoundry.org.key && 
#    echo "deb [signed-by=/usr/share/keyrings/cli.cloudfoundry.org.key] https://packages.cloudfoundry.org/debian stable main" > /etc/apt/sources.list.d/cloudfoundry-cli.list && 
#    apt-get update && apt-get install cf8-cli -y
#fi

#if $pnmp; then
#    pnpm config set store-dir ~/.local/share/pnpm/store && pnpm install --frozen-lockfile
#fi