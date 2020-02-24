# Ethreum Hackathon Setup Check

This project lets you check if your development environment is ready for an
Ethereum hackathon.

## How do you use it?

You just need to clone this repository and install it. If your setup is ready,
you'll see a confirmation message. If the installation fails, follow the
instructions from the next section.

```bash
git clone https://github.com/alcuadrado/ethereum-hackathon-setup-check.git
cd ethereum-hackathon-setup-check
npm install
```

## Setting up your development environment

This section has instructions for setting up your environment in a clean
installation of your operating system. Feel free to skip any step if you think
they aren't necessary.

### Linux

#### Ubuntu

This guide uses the official Node.js PPA, so we can choose the version of
Node.js we want.

```bash
sudo apt update
sudo apt install curl
sudo apt install build-essential # We need this to build native dependencies
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```

### MacOS

This guide uses [Node Version Manager (nvm)](http://github.com/creationix/nvm).

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
nvm install 10
nvm use 10
nvm alias default 10
npm install npm --global # Upgrade npm to the latest version
npm install -g node-gyp # Make sure we have node-gyp installed

# This next setp is needed to build native dependencies.
# A popup will appear and you have to proceed with an installation.
# It will take some time, and may download a few GB of data.
xcode-select --install
```

### Windows

This guide requires some manual installations. Please follow them.

1. Install Node.js 10.x by going to [its download page](https://nodejs.org/dist/latest-v10.x), downloading `node-v10.XX.XX-x64.msi`, and running it.
2. [Open your terminal as Administrator](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/) and run the following command: `npm install --global --production windows-build-tools`. It will take several minutes and may download a few GB of data.

## Upgrading your version of Node.js

### Linux

#### Ubuntu

1. Remove nodejs with `sudo apt remove nodejs`.
2. Go to the [NodeSource's Node.js Binary Distributions](https://github.com/nodesource/distributions#debinstall), and install their PPA for the version of Node.js that you are looking for.
3. Run `sudo apt update && sudo apt install nodejs`

### MacOS

If you followed our recommended installation steps, you can change your Node.js
version using [nvm](http://github.com/creationix/nvm).

For example, this is how you'd upgrade to Node.js 12.x:

```bash
nvm install 12
nvm use 12
nvm alias default 12
npm install npm --global # Upgrade npm to the latest version
npm install -g node-gyp # Make sure we have node-gyp installed
```

### Windows

You need to follow the same installation instructions but choosing
[another version of Node.js from its website](https://nodejs.org/en/download/releases/).