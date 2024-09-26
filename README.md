Password generator app

You can generate passwords. 

Challenge from:
[frontendmentor.io](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh)

[LOST COMMITS] This is the third repo for the same project...so i lost my commits. but I paid attention to it so well that I committed all changes neatly.

[EXTRA DEPLOYMENT INFO]
 I did this project in angular 18 with ssr. I deployed it on vercel. It was good on a laptop, not good on my mobile. I searched for the error for hours, deployed several times, it was always fine on a laptop, never on a mobile phone. After many hours of trying and more and more deployments, I sent the link to my girlfriend so she could look at it to see if it works for her and it's just my phone that's bad. It was good for her, it was good for others. I bought my phone used 8 years ago. I'm going to buy a new phone now or my hair will fall out.

[reason for the deviation from the graphics]
 by design, the strength depends on how many checkboxes are checked. The initial status is zero and the number of characters is also zero. BUT!! If someone sets the password length to 1 and ticks all the checkboxes, the password will still not be strong, regardless of the fact that you should now change it to strong. But if you set 2 or 3 or 4 characters then neither. In the beginning, I did everything based on the design, then disabled password generation until something was checked and the length of characters was more than 0. But that didn't make sense anyway, so I deviated from the graphics and solved it the way I thought it was logical. You can generate a password right away, you don't necessarily need to set anything. In contrast to the graphics, the minimum character is not zero, but 5, and I removed the initial zero state, so the strength starts with 1, not zero. Correct me if I'm wrong. 
 In order for the middle value to be 10, as in the design, since I took 5 as the first value, I set the final value from 20 to 15. So the password can be between 5-15 characters and the strength between 1 and 4, not between 0-4.

# Ng16

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
