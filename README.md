# Econva Groceries
##### By Joanna F, Maryam K and Marryam K

## Project Overview
Given the task of creating software capable of solving an environmental, social justice or marginalization issue, we as a group decided to create a website. Our chosen issue was that of excessive plastic packaging used for food, especially in grocery stores. So we researched stores in the region taht offer eco-friendly alternatives to traditional plastic-wrapped products and made this website.
```
Languages used:
- JavaScript
- HTML
- CSS
```
## Call to action
Using the resources available to us online (*cited in "Credits"*), we offer users an opportunity to learn about the harmful effects of plastic packaging. Additionally, we give them this website as a resource to find eco-friendly grocery stores across the region and contact us to add their own.

## Navigation
Below is information relevant to every part of the website and code files.
### Home
**Code by: Marryam K**

**Writing by: Joanna**

`index.html` `script.js` `style.css`

- This is the landing page for users
- Top navigation bar consistent throughout all the pages (all made by me)
- Coded mainly in HTML combined with CSS elements
- Has information relevant to the purpose of our website and plastic packaging
- Consists of a picture slideshow animated using JS below:
```js
function showSlides(z) { //Displays images in slideshow
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (z > slides.length) {
    slideIndex = 1
  }
  if (z < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
```


### Shop by region and shop pages
**Code by: Maryam**

`shopByRegion.html` `shopHamilton.html` `shopHuntsville.html` `shopKitchener.html` `shop.Ottawa.html` `shopToronto.html` `shopWaterloo.html` `style.css`

- shop by region page contains hyperlinks to all of the different cities that users can choose from
- each shop[city] page contains logo images which, when clicked take the user to the website of the company/business 

### About
**Code and Writing by: Joanna**

`about.html` `style.css`

- This is the section with our mission statement
- It also has all of our works cited, for the entire research of this project and the image credits for the homepage
- Nothing fancy in terms of code, only thing maybe noteworthy is the hyperlink and that's still too easy to say anything about
- Works cited was also made by me

### Contact
**Code by: Joanna**

`contact.html` `style.css`

- This page has a single hyperlink which leads to the user's email client
- It took me so long to figure out how to do that with just HTML, there is a better way which lets the user type a comment and their email in seperate boxes and *then* it links them to their email, which already has the info they put in, but you can't do that without PHP from what I understood
- Instead I made it just so that it opens the user's email client with our email already in the email being composed, and they can take it from there
### FAQ
**Code by: Marryam K**

**Writing by: Marryam and Joanna**

`faq.html` `script.js` `style.css`

- FAQ answers obvious questions from users and also gives instructions on contacting us and how the process will look like
- Main div is the dropdown question boxes
- Coded in JS below:
```js
for (i = 0; i < drop.length; i++) { //Drops panel down to show content
  drop[i].addEventListener("click", function () {
    this.classList.toggle("active"); //Accesses CSS element to change when dropdown is clicked
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) { //Checks if menu is already open
      dropdownContent.style.maxHeight = null;
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    }
  });
}
```

## Documentation
On the FAQ page of our website, there's answers and guides throughout the most important parts of the website. This MD also offers a look into how the website was made and who contributed to what parts. Additionally, all our files are stored on [Econva's Github repository](https://github.com/icaicarus/Econva-Groceries).
- Compiled + tested in Replit collaboratively 
- Version controlled using Github

## Credits
[Photo/source citations](https://docs.google.com/document/d/1suOFyWYDXuieVtiCiYQnB-TLZ1AFFjidwytJflorH-U/edit?usp=sharing)


