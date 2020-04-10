# KMK CSUI's Website

Built with React.js

Deploy:
[Production](kmk-csui-web.herokuapp.com)
[Staging](kmkcsui-staging.herokuapp.com)

# Developing this project on your local

Follow these steps:

## Pre-Development
* Windows
Go to this website and download the latest version.
```
https://nodejs.org/en/
```
Copy the address of your node.js installation and add it to Environment Variables. 

Download your favorite Text Editor. Visual Studio Code is recommended.
```
https://code.visualstudio.com/
```

Install extension for your Visual Studio Code:
```
ES7 React/Redux/GraphQL/React-Native snippets from dsznajder
```

* Mac
Go to this website and download the latest version.
```
https://nodejs.org/en/
```

Download your favorite Text Editor. Visual Studio Code is recommended.
```
https://code.visualstudio.com/
```
or download with brew command:
```cmd
brew cask install visual-studio-code
```

Install extension for your Visual Studio Code:
```
ES7 React/Redux/GraphQL/React-Native snippets from dsznajder
```

* Linux
Download React.js
```cmd
sudo apt-get install nodejs npm
```

Download your favorite Text Editor. Visual Studio Code is recommended.
Follow Visual Studio Code's official guide here:
```
https://code.visualstudio.com/docs/setup/linux
```

Install extension for your Visual Studio Code:
```
ES7 React/Redux/GraphQL/React-Native snippets from dsznajder
```

## Development
* Clone this project
```cmd
git clone https://gitlab.com/kmk-csui/kmk-csui-web.git
```

* Switch branch to the feature name you'll build
```cmd
git checkout -b <feature> staging
```

Example: you'll build login feature.
```cmd
git checkout -b login staging
```

`Note: always end it with "staging" branch, not "master"!`

* Open project in your Text Editor

* Start the application
```cmd
npm start
```
Open `http://localhost:3000/`

## Post-Development
If you're done developing some parts, do these steps:

* Tell git the changes you've made
```cmd
git add <file>
```
or instead (add all files):
```cmd
git add .
```

* Commit your changes
```cmd
git commit -m "<your commit message>"
```

* Push your changes to gitlab
```cmd
git push origin <feature>
```

Example: you've build some parts of the login feature.
```cmd
git push origin login
```

## If there is any update from staging, do:
```cmd
git pull origin staging
```
On your branch!