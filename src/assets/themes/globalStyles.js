import { createGlobalStyle } from "styled-components";
import device from "./device";

const GlobalStyle = createGlobalStyle`
/*
=============== 
Fonts
===============
*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: rgb(0, 37, 92);
  --clr-primary-2: #003e79;
  --clr-primary-3: rgb(0, 89, 153);
  --clr-primary-4: hsl(202, 100%, 36%);
  --clr-primary-5: #2892d7;
  /* lighter shades of primary color */
  --clr-primary-6: #6d94bc;
  --clr-primary-7: #5ba2bb;
  --clr-primary-8: rgb(199, 226, 222);
  --clr-primary-9: #e6f4f1;
  --clr-primary-10: #eefbff;
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: #0b5780;
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: rgb(241, 245, 248);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-black: #222;
  --clr-white: #fff;
  --clr-white-transparency-8: rgba(255, 255, 255, 0.8);
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 117rem;
  --fixed-width: 70rem;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    /* This defines what 1rem is */
  font-size: 62.5%; /* 1 rem = 10px; 10px/16px = 62.5% */

  
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 1.4rem;
  margin-top: 5.8rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);

  line-height: 1.25;
  margin-bottom: 1.2rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 4.8rem;
}
h2 {
  font-size: 3.2rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.4rem;
}
p {
  margin-bottom: 1.4rem;
  color: var(--clr-grey-3);
}

/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
  padding: 0.6rem 1.2rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 1.4rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-8);
}

.btn--animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.center-btn {
  display: block;
  width: 19.2rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 4.8rem;
}
/* section */
.section {
  padding: 8rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 117rem;
}

/* added during recording */
.underline {
  width: 20%;
  height: 0.2rem;
  margin-bottom: 2rem;
  background: var(--clr-primary-8);
  margin-left: auto;
  margin-right: auto;
}
.section-title {
  margin-bottom: 6.4rem;
  text-align: center;
}
.bg-grey {
  background: var(--clr-grey-10);
}
/* page links */

/* social links */
.social-links {
  margin-top: 3.2rem;
  width: 24rem;
  display: flex;
  justify-content: space-between;
}
.social-link {
  font-size: 2.8rem;
  color: var(--clr-grey-1);
  transition: var(--transition);
}
.social-link:hover {
  color: var(--clr-primary-5);
}

/*
=============== 
Sidebar
===============
*/
.sidebar {
  background: var(--clr-grey-10);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
}
.show-sidebar {
  opacity: 1;
  transform: translateX(0);
}
.sidebar-links li {
  opacity: 0;
}
.sidebar-links li a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--clr-grey-5);
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  font-size: 2rem;
  transition: var(--transition);
  border-radius: var(--radius);
}
.sidebar-links li a:hover {
  background: var(--clr-primary-9);
  color: var(--clr-primary-5);
}
.close-btn {
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 4rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
}
@media screen and (min-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
/*
=============== 
Sidebar Animation
===============
*/
.sidebar-links li {
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
}
.sidebar-links li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-links li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-links li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-links li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-links li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideRight {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sidebar-icons li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}
.sidebar-icons li a {
  color: var(--clr-grey-1);
}
.sidebar-icons li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-icons li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-icons li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-icons li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-icons li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/*
=============== 
Projects
===============
*/
.projects {
  background: var(--clr-grey-10);
}
.project {
  display: grid;
  margin-bottom: 6.4rem;
}
.project-img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 30.4rem;
  z-index: 1;
}
.project-img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
  opacity: 0.85;
  transition: var(--transition);
}
.project:hover .project-img::after {
  opacity: 0;
}
.project-info {
  background: var(--clr-white);
  padding: 1.6rem 3.2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.project-number {
  display: inline-block;
  font-size: 2rem;
  color: var(--clr-primary-5);
  margin-bottom: 1.2rem;
}
.project-slug h3 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 2.4rem;
  text-transform: uppercase;
  color: var(--clr-grey-1);
  transition: var(--transition);
}
.project-slug h3:hover {
  color: var(--clr-primary-5);
}
.project-desc {
  word-spacing: 1rem;
  color: var(--clr-grey-3);
}
.project-stack {
  margin-bottom: 1.6rem;
}
.project-stack span,
.about-stack span {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.36rem;
}
.about-stack span {
  margin-top: 0.8rem;
}
.project-icon {
  color: var(--clr-primary-5);
  font-size: 2rem;
  margin-right: 0.8rem;
  transition: var(--transition);
}
.project-icon:hover {
  color: var(--clr-primary-1);
}
@media screen and ${device.mobileL} {
  .project-img {      
    height: 30.4rem;
  }
}
@media screen and ${device.tablet} {
  .project-img {
    height: 35.2rem;
  }
}
@media screen and ${device.laptop} {
  .project {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
  .project-img {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 48rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .project-info {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-img {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-info {
    grid-column: 2 / span 7;
    grid-row: 1 / 1;
    text-align: left;
  }
}

/*
===============
Pages
===============
*/

.project-template-page,
.projects-page,
.error-page,
.contact-page {
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
}
.error-page {
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
}
.error-page h1 {
  text-transform: uppercase;
  color: var(--clr-primary-1);
  margin-bottom: 3.2rem;
}

/*
===============
Project Template Page
===============
*/
.project-template-page {
  padding-top: 4.8rem;
  text-align: center;
}
.project-template-page h2 {
  text-transform: uppercase;
}
.project-template-page p {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 3.2rem;
}

/*
===============
Contact Page
===============
*/
.contact-page {
  display: grid;
  place-items: center;
  padding: 8rem 0;
}
.contact-form {
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 56rem;
}
.contact-form:hover {
  box-shadow: var(--dark-shadow);
}
.contact-form h3 {
  padding-top: 2rem;
  color: var(--clr-grey-5);
}
.form-group {
  padding: 1.6rem 2.4rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: none;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  /* text-transform: uppercase; */
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
}
.submit-btn {
  display: block;
  width: 100%;
  padding: 1.6rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

/*
==============
Animation 
==============
*/
@keyframes moveInLeft {
  0% {
    opacity: 0;
    /* transform: translateX(-10rem) rotate(-60deg); */
    transform: translateX(-16rem);
  }

  60% {
    /* transform: rotate(120deg); */
  }

  80% {
    transform: translateX(1.6rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(16rem);
  }

  80% {
    transform: translateX(-1.6rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(4.8rem);
  }

  80% {
    transform: translateY(-1.6rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/*
================
GRID
================
*/

.row {
  max-width: 114rem;
  margin: 0 auto;
}
.row:not(:last-child) {
  margin-bottom: 5rem;
}
.row::after {
  content: "";
  display: table;
  clear: both;
}
.row [class^="col-"] {
  float: left;
}
.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}
.row .col-1-of-2 {
  width: calc((100% - 6rem) / 2);
}
.row .col-1-of-3 {
  width: calc((100% - 2 * 6rem) / 3);
}
.row .col-2-of-3 {
  width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
}
.row .col-1-of-4 {
  width: calc((100% - 3 * 6rem) / 4);
}
.row .col-2-of-4 {
  width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);
}
.row .col-3-of-4 {
  width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem);
}

`;

export default GlobalStyle;
