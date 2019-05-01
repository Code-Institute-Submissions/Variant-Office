Variant Office Website

This project is a website for an emerging architectural company called Variant Office. It's a young company consisting 
of three principle architects with technical and dynamic skillset. Employing a stripped down and understated engineering style, 
their approach echos the minimal outcome of their projects, and so does the website design style.

The website has a contemporary but simple and familiar layout. The home page gives a clean and precise visual, the company 
logo on the top left clearly stands out so that visitors to the site can immediately know where they are. The "About" menu 
item consist of a brief description of the company and the summerised profiles of the three compony directors. The "Projects" 
menu item has a detailed showcase of the work that the company does. Consisting of a grid with images and video content 
describing past projects. This is the part of the website that users would visit the most as it has more infomartion, 
but visually and in text. The "Categories" and "Research" menu items would consist of more detailed information on past, 
current and future projects that Variant Office is involved in. Projects would be grouped according to their genre and 
specificity. The user will be able to see the beginning stages of a project, from the architects initial design sketches,
research notes, to the final finished product. The last menu item allows for users to contact the the company by phone or
email. Full address and a map is also available there, if anyone trying to find the location of the company office.
All menu items have social media links and architectural accreditation for the company. 

UX
This website is for people who are looking to build a property from scratch or improve something already existing.  
The individuals visiting this website would be looking for architecture with contemporary aesthetics, attention to detail 
and inspired design. The website provides examples of the work that the company has undertaken, it also has vides of clients 
speaking about the work the company has done. There is a contacts page for individuals who want to get in touch directly with 
the architects. Each page has a link to the company's social media for people who prefer engaging with the in that way.

* As a potential client I would like to see (visually) the kind of work that the architects have done.
* I would like to know about the architect’s background, experience and also have a look at their recent work.
* As a new client I would like to hear what other company clients have to say about their projects.
* For a new client or a collaborator, the company’s social media site keeps me informed of other projects that the architects 
  are currently working on.
* The style and presentation of the website is my first peek into the company. As a first time visitor, this helps to give me 
  confidence that I am in the right place.

Mockups
Please find attached on the link are pen on paper sketches of the original idea of the website. Please click here

Existing Features

index.html
* Minimalist front page
  Monochrome color scheme against a white canvas in order for the content to standout.

* Company logo
  Simple in its design but eye catching and positioned on the top left inviting the user to click on it.

* Carousel
  Visual representation of past completed projects for users to in a gallery format, and familiarise themselves with the 
  type of work the company does.

* Footer
  The bottom of the site has an uncomplicated footer with links to the company's social media networks for interested users


about.html
* Company profile
  A summary of the company’s ethos, inspiration and approach to architecture for new and existing users to read.

* Architect’s profiles
  Three columns of text, each one detailing one of the three principle architects in the company. For users who want a bit 
  more depth about the individuals behind the company and the brand.

projects.html
* Grid
  Information text about the company’s completed projects.

* Photos of completed building projects
  Allows users to see images of the finished product with a discretion accompanying the photograph. 

* Video
  Also on the same grid the users can watch videos of past clients speaking about their completed properties.


contacts.html
* Grid
  Information text about the company’s completed projects.

* Photos of completed building projects
  Allows users to see images of the finished product with a discretion accompanying the photograph.

* Video
  Also on the same grid the users can watch videos of past clients speaking about their completed properties.


Features to be implemented

cateories.html and research.html 
* These two tabs will house detailed information on the various company projects. Everything will be divided into groups and 
  subgroups so to make it easier for the user to accurately search for specific project examples.

* There will also be a research section, which will concentrate on the process that the architects employ in their design and 
  development of their projects. This section will give the user insight on the creative process and the inspiration behind 
  the work.

* Both these item menus will use Java Script for displaying the project portfolio. Also they will use Java Script to display 
  live social media content.

Technologies Used
* HTML
  Used for the markup

* CSS
  Variant_office/styles.css
  This was used to style the elements of the HTML code

* Bootstrap
  https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
  Used to assist with styling the website and to build the grid

* Font Awesome
  https://use.fontawesome.com/releases/v5.3.1/css/all.css
  Used to create uniform fonts for the website social media footer

* Validators
  Used an HTML [validator](https://validator.w3.org/) to check the code for syntax errors
  CSS [checker](http://csslint.net/) used to check the styling

* Formatter
  An HTML[formatter](https://htmlformatter.com/) was used


Testing:

1. Spelling, Grammar, Punctuation
   Checked for typos, grammar, and proper punctuation throughout all site pages. 

2. Fonts
   Went through the copy checking to see that the formatting is consistent, checked for odd blips in the copy.

3. Live URLs
   All links to external websites, other webpages within the site and links to images have been checked and verified that 
   they work properly. Clicked on every link to make sure it is going to the correct page, also made sure that links that are 
   meant to open in another page have the target="_blank"


4. Title Tags/Meta Data
   Made sure that every page has a unique and HTML corresponding title tag. 

5. Compatibility
   Tested the website on Google Chrome, Firefox Mozilla and Safari for compatibility.

6. Images
   The images do not display text renders when hovered over, but all the alt attributes are there. Every image displays 
   correctly. All images posted are formatted as jpg with only one exception for the ARB link image which is a PNG. 
   All photographs are stored as JPG, and the ARB logo is a simple image/icon and stored as a PNG.

   The photographs on the projects.html page load slightly slower depending on the browser used. I think it is because of the 
   size but I haven’t worked out how to solve that issue.

7. Social Media Integration
   All social media icons on the site go to the correct pages. Social Media buttons are easily identifiable and located on 
   the footer of every page.

8. Site Loading Speed & Responsive
   Using Google Test My Site I was able to test the loading speed on mobile 3G devices and it is good - within 2 seconds. 
   I also tested the responsiveness of my site with the toggle device bar on the Google inspect page.


9. Tested my CSS with CSS [Lint validator](http://csslint.net/) for any syntax errors or unnecessary code DRY. 
   Did the same for the HTML, using [HTML](https://htmlformatter.com/) checker. Using Google Chrome Developer Tools I was 
   able to look and play around with different aspects of my code, like the grid spacing. In doing so I eventually can 
   settle on a design feature. I also used the tools to make sure my Mobile first approach worked, ie. testing on different 
   devices.


Deployment
Having started working on the website skeleton locally on my computer, using Atom code editor. I then created a repository on 
GitHub, this is where I have deployed my code. Once all my code is on the GitHub repository, I went on editing the project. 
Every time I make a change, I follow up by staging the changes and then committing them.

Social-Links & Nav-Titles:
Used the same CSS hover styling for both in order to have a recognizable theme.

Bugs/Problems Encountered
My footer kept on twitching to the right every time I clicked on one of the grid items. Solved by making the img logo position: 
relative.

Had an issue where the video would continue playing the sound even after its been closed. Wrote a JavaScript function to make 
sure the video (including sound) completely stops when video is closed.  

Credits
Content
The text for the about.html page was obtained from current Variant Office website.

Media:
All photos were obtained from www.unsplash.com

Acknowledgements
I received inspiration and guidance for this project's style from Ashvin De Vos at Variant Office.



