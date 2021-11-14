# X-Movie

## Getting Started

1. Fork and clone this repo, then open two terminal tabs and navigate to the root directory.

2. In one of the two seperate terminal tabs run the following script:
  ```
  npm start
  ```

   Or to run the command in background on Ubuntu, you can run the following commands:
  ```
  # start the app in background
  sudo npm install forever -g
  forever start -c "npm start" ./

  # shutdown the app
  netstat -anp |grep 5000
  kill -9 ${pid}
  ```

3. In the second terminal tab run:
  ```
  npm run react-dev
  ```

4. Open localhost:5000 in the browser and you should see **Hello World!** if React is running correctly.

Now you can get started building the application by visiting gLearn and following the next instructions there.
