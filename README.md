# layout_dev

### useful commands
* `php -S 127.0.0.1:8080`  

### to-do
* DONE - try to re-enable scrolling (without scrollbars): https://stackoverflow.com/questions/3293650/hide-scrollbar-while-still-being-able-to-scroll-with-mouse-keyboard or https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp    

## new (simpler) plan:
this can all be done in css  

body:
* min height 720px  
* width from minimum 4/3 * height to 100% viewport (if larger)  
  = `max(100vh *4/3, 100%)`  

sidebars:
* some sensible fraction of body width  