var Slides = {
   totalSlides : '',
 
   init : function( totalSlides ) {
      // If nothing was passed to this function, we can't continue. 
      if ( !totalSlides ) throw new Error("Please pass the total number of slides to the init method");
      Slides.totalSlides = totalSlides;
 
      // Load the slides
      Slides.loadContent();
   },
 
   loadContent : function() {
 
   }
}
 
// All right; let's do this. We'll assume that we've created 6 slides, total.
Slides.init( 6 );