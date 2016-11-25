# μManager

### wth is this?

this is an ionic 2 app designed to serve as a high fidelity prototype for a behavioural change application as part of human factors coursework :shit:

We have to demo the prototype working so why not have an actual app when it's about the same dev effort as throwing together html

### Prerequisites

You'll need ionic and the cordova core.

Install those with:
```bash
npm install -g cordova ionic
```

The getting started docs didn't mention this at all but I had an issue with cordova versions or licenses or some shit and ionic was giving me version errors when trying to start an app, to fix it I ran something stupid like:
```bash
cordova
```
and have it prompt me to use the latest version or something

### Setup

Clone the repo:
```bash
git clone git@github.com:22a/MicroManager.git
```

Build the app:
```bash
ionic build
```

### Dev
Since this stuff's just an angular app you can see what the app will look like if you run:
```bash
ionic serve
```
it'll open up your browser and show you the app, open devtools and hit `cmd+shift+M` and select iphone6 or whatever

### Usage
not sure how we'll run this in the end, we can put it on people's phones or we can use the xCode ios emulator thingy and screencast that way

to emulate run
```bash
ionic emulate ios
```

maybe this thing will help to run it on real phones, i haven't tested
```bash
npm install -g ios-deploy --unsafe-perm=true
```
