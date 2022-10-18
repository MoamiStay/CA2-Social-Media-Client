# CA2-FED2 - Regine Naas

CA2 - FED2. Sosial medie app med autentisering og innlogging

note:
During the weekend/monday some changes were made to the API that caused the media tags to be null instead of "", so I changed it last minute. The changes to the API were fixed since delivery deadline so I re-did the changes I made a commit after delivery deadline.

I consider this project unfinished since there is a lot I would like to change and add but couldn't because I've been very busy the last two weeks.

At least I managed to implement all required functionality, but some features I would like to add/change would be:

add delete/edit buttons to the post when they show up in the feed, not only on "view post" page.
The styling for the "edit" link should be improved as it is not very noticable as it currently is.
The "edit" button was working perfectly some time earlier, but during last testing there seems to be some issues with it where it works sometimes but not always. Did not have time to figure this out.

"like" and "comment" buttons does not work. I would've liked to implement this functionality as well. And the option to change profile picture.

Modules:
I had planned on cleaning up the code and organizing some of the js code using modules, however I ran out of time.
There might be unused code that is commented out left is the files, I was going to clean this up but didn't have time.
Some of the functions I would've liked to use as modules:
get the posts and list them out. To do this I would've tried to add a third parameter that could be used to alter the method; "POST", "PUT", "DELETE", "GET".

Styling:
There is a lot of missing styling that I would want to add.

- Making the nav more appealing by placing "home", "profile" and "log out" to the far right, as well as adding a small profile image next to "profile".

- Colors could be improved.

- The content of the listed posts have a orange underline that should've been removed.

- The "create new post" form should've been more "whole" instead of 3 seperate input fields.

- In the validation for login and register the error messages should be colored red.

References:

All RegEx er tatt fra:
https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

Picture for default user img was taken straight from google... I only did this as a quick temporary solution and forgot to change it later. I didn't even save the link where I found the image. This is a big no-no, but I hope I can be forgiven this once.
