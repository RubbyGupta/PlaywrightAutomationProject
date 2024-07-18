# PlaywrightAutomation

## Introduction

This repository contains the tests for KPMG Origins Technical Assessment.

## Install npm

- Step 1: Clone the project to a local directory.
- Step 2: From the root of the project, run the command `npm install`

    <br> &emsp; Note: This will create the `node_modules` folder with required dependencies.

## How to run Tests

+ Step 1: Run the command `npx playwright test`
  <br> &emsp; Note: This will run the test suite in all three browsers and in headless mode.
+ Step 2: Run the command `npx playwright test --project chromium --headed --debug`
  <br> &emsp; Note: This will run the test suite in one browser chrome and in headed and debug mode.
+ Step 3: Run the command `npx playwright test SignIn.spec.js`
  <br> &emsp; Note: This will run the spec file that is specified. There are 3 spec files that can be tested
+ Step 4: Run the command `npm test'
  <br> &emsp; Note: This command is configured in package.json for script command("test": "playwright test --project chromium --headed")


## How to install Playwright using terminal

If you don't have Playwright installed locally, run `npm init playwright@latest`
 
