# KMK CSUI's Website

Built with React.js

# Developing this project on your local

Follow these steps:

## Pre-Development
### Windows
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

### Mac
Go to this website and download the latest version.
```
https://nodejs.org/en/
```

Download your favorite Text Editor. Visual Studio Code is recommended.
```
https://code.visualstudio.com/
```
or download with brew command:
```
brew cask install visual-studio-code
```

Install extension for your Visual Studio Code:
```
ES7 React/Redux/GraphQL/React-Native snippets from dsznajder
```

### Linux
Download React.js
```
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
### Clone this project
```
git clone https://gitlab.com/kmk-csui/kmk-csui-web.git
```

### Switch branch to the feature name you'll build
```
git checkout -b <feature> development
```

Example: you'll build login feature.
```
git checkout -b login development
```

`Note: always end it with "development" branch, not "master"!`

### Open project in your Text Editor

### Start the application
```
npm start
```
Open `http://localhost:3000/`

## Post-Development
If you're done developing some parts, do these steps:

### Tell git the changes you've made
```
git add <file>
```
or instead (add all files):
```
git add .
```

### Commit your changes
```
git commit -m "<your commit message>"
```

### Push your changes to gitlab
```
git push origin <feature>
```

Example: you've build some parts of the login feature.
```
git push origin login
```