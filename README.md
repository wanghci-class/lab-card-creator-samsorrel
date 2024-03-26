[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/A8Rhit-R)
# Greeting Cards

In this (two-part) lab, you will write a tiny app to create greeting cards that you can send to your friends, family, and more! You will need the knowledge you've built in the past two preps (forms and localStorage).

For this lab, you will submit the assignment individually (but feel free to collaborate with others) via GitHub Classroom.

## Getting Started

1. Clone this newly-created repository on your computer
1. Open the repository folder in VS Code
1. Look over the provided code to get a feel for what it does and where you need to add your own

## Creating the Form

We've provided the code and styles for the "preview" area of the page, but you'll need to create a form and provide the functionality for a user to specify what their card's title, message, to, from, etc. should be.

In `card-creator.html`:

1. Create an HTML `form` inside the `form-area`
1. You will need four text `input`s and a `textarea`, each with its own `label`
    * Put each group of `label` plus `input` in its own `div`
        * Give this `div` a class of `form-group`
    * Make sure to include `placeholder` text
    * You'll want to make sure each element has a `name` and `id`
1. Add `button`s at the end of the `form`
    * Put them inside a `div` with the class `form-buttons`
    * The preview button should have `type="button"`
    * The save button should have `type="submit"`
    * Make sure they have `id`s, so you can access them easier in a script

## Adding the Functionality

In the `script.js` file, you'll want to write some JavaScript to do the following:

1. When the "preview" button is clicked, you should set the text in all the appropriate `span`s to the value of the corresponding control in the form.
1. When the "save" button is clicked, you should add the card to an array and save the array of cards to `localStorage`:
    * You should start by loading the existing array from `localStorage` with the key `cards`
        * If there doesn't exist an entry with the key, create a new array and assign it to a variable
        * If there does exist an entry with the key, you should parse it and assign it to a variable
    * Create a new JavaScript object (aka map/dictionary) to represent the current card
        * It should have five properties: `to`, `from`, `title`, `subtitle`, and `message`
        * The properties should be set to the corresponding value from the form
    * Add the new object to the end of the array
    * Store the array in `localStorage` to the entry with the key `cards`, overwriting any existing entry
        * Don't forget: `localStorage` only lets you store strings, so you'll need to "stringify" the array!
    * Saving multiple cards should result in an array containing all the cards.
        You can use the developer console in [Chrome/Edge](https://developer.chrome.com/docs/devtools/storage/localstorage/) and [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) to check if you're doing this correctly.

## Submission

Commit and push your code to GitHub.
