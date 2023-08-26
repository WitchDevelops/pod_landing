# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges you to improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![POD mobile](https://github.com/WitchDevelops/pod_landing/assets/112077394/a5dfe182-ac5b-4e11-ae18-f8eefcd1a342)
![POD tablet](https://github.com/WitchDevelops/pod_landing/assets/112077394/420b2d45-d576-49a8-bfa7-ebbc49411037)
![POD desktop](https://github.com/WitchDevelops/pod_landing/assets/112077394/e0bfade5-8c5d-41fc-8b81-8a915b019e96)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [(https://witchdevelops.github.io/pod_landing/](https://witchdevelops.github.io/pod_landing/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

How to add client-side form validation with JavaScript. I could do form validation in HTML, but in this project I learned how to add a custom message displayed below the input field instead of a browser pop-up. I have also used regex to see if the input pattern matches the expected one for a valid email.


```
const form = document.getElementById('subscribe');

let validation = document.createElement('span');
validation.classList.add('error');
validation.innerText = 'Oops! Please check your email';

function ValidateEmail(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    alert('Valid email address!');
  } else {
    form.appendChild(validation);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  ValidateEmail(email);
});
```

### Continued development

In the future, I want to continue practicing JavaScript and master responsive layouts with big layout shifts, like in this project.
