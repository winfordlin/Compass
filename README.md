<p align="center">
  <img width="131" height="161" src="https://drive.google.com/uc?export=view&id=1_8y9jYwp1cFnVYDLkO34DEEdf_cipICh">
</p>

<h1 align="center">Compass</h1>

<p align="center">
  
  <img src="https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/"/>

  <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/"/>

  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com"/>

  <img src="https://badge.fury.io/js/badge-list.svg"/>
  
  
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master"/>
</p>

<br/>
<br/>

<h2 align="center">Quickly Pinpoint Errors in your Kubernetes Deployment</h2>

<img src="https://user-images.githubusercontent.com/67027492/85482352-124ad180-b591-11ea-89c1-1b81c05bf044.gif"/>

## About

Compass helps you pinpoint your errors by asking simple (Y/N) questions. It helps execute kubectl debugging commands at every step to increase visibility. Questions start at the Pod level and and end at the Ingress level or until error is isolated.

Compass is meant to be a helpful checklist and not a monitoring/logging framework. It doesn’t fix your specific Pod issues (though I wish), it just outputs more expressive error messages than “CrashLoopBackOff”.

## Features

#### :heavy_check_mark: Simple (Y/N) Questions :heavy_plus_sign: Step by Step Visibility

#### :heavy_check_mark: Checkpoints for Error Isolation

#### :heavy_check_mark: Works on the Pod level all the way up to the Ingress level

<br/>

### Service Level

<img src="https://user-images.githubusercontent.com/67027492/85482710-75d4ff00-b591-11ea-93ff-72b2ac181753.gif"/>

### Ingress Level

<img src="https://user-images.githubusercontent.com/67027492/85622215-868a8100-b634-11ea-83d4-765d9dbc7997.gif"/>

<br/>

### :white_check_mark: Debug Checklist First, :sob: Search Overload Later

<h3 align="center"> (Y/N) Questions based on this awesome <a href="https://learnk8s.io/a/troubleshooting-kubernetes.pdf">troubleshooting guide</a> by LearnK8s.io </h3>

<p align="center">
  <img width="1020" height="1280" src="https://drive.google.com/uc?export=view&id=1lzXyq1RY1QFExFK7rWCCLwBNP83Lw7DA">
</p>

## Installation

To install via npm:

```sh
npm install kcompass
```

## How to Use

#### One Command

```sh
kcompass debug <pod-name>
```

### Code Snippet

```javascript
if (await pod.isRunContainerError()) {
  console.log(colors.green(`The issue is likely to be with Mounting Volumes`));
}
```

## Highlights

:rocket: **FAST** - debugs from Pod level to Ingress level in seconds, not hours

:mag_right: **Visible** - auto-runs kubectl commands at major steps giving you eyes on the process

:vertical_traffic_light: **Lazy-Friendly** - Simple (Y/N) Questions, Color Highlights (Red / Green)

:page_facing_up: **Lightweight** - No bulk files, just the essentials

:dart: **Predictable** - Navigation follows this popular [troubleshooting guide](https://learnk8s.io/a/troubleshooting-kubernetes.pdf)

## Contributors

Contributors Welcome!

Huge Thanks to the Kubernetes Open Source Community for the Support.

If you found this interesting or helpful at all, feel free to drop a :star2: star :star2: on this project to show your support!

Got a suggestion, issue or feedback? Shoot me an email at kubecompass@gmail.com and I'll respond within the day.
