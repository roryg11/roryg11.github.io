$(document).ready(function(){
  var puppyLink = $('#puppy-play-date');
  var uncollegeLink = $('#fellow-tracker');
  var marchMadness = $('#march-madness');
  puppyLink.on('click', function(){
    if($('.project-container')){
      $('.project-container').remove();
    }
    var source = $('#puppy-playdate-template').html();
    var template = Handlebars.compile(source);

    var context = {
      projectTitle: "PuppyPlayDate.co",
      description: "The canine companion matching app to find compatible puppy pals in your area",
      siteLink: "www.PuppyPlayDate.co",
      githubLink: "https://github.com/roryg11/dog_play_date_V2",
      frontEnd: "Front-End: Vanilla Javascript, Handlebars, jQuery, AJAX, WebSockets",
      backEnd: "Back-End: Rails, Custom Web Scraping API, Rspec Testing, Postgresql",
      process: "Process: Built using Test Driven Development for the skeleton of the application",
      architecture: "Relational data structure, but we used single table inheritance to structure a user's preferences so that we could treat those preferences as a collection but also code unique behaviors for each filter.",
      architectureImg: "images/architecture.jpg",
      featureOne: "Messaging",
      featureOneDescription: "Live messaging feature using websockets and Event Machine with rails.The websocketopens a bidirectional TCP connection between the browser and the server, so it can nowpush new data to the browser, rather than the browser having to continuously check for new data.",
      featureOneImg: "images/messaging_2.png",
      featureTwo: "Matching",
      featureTwoDescription: "A user was created with a zipcode filter so that we only return dogs within acertain radius, but the other filter behaviors ranged from inclusive to exclusive(in the case of blocking users),which allowed users to create their own preferences but it also allowed us to filter dogs behind the scenes to match appropriately.",
      featureTwoImg: "images/matches.png",
      featureThree: "Mapping",
      featureThreeDescription: "We considered using Google places API, but determined we would rather use our own database seeded with useful information about dog parks by dog owners. We use Nokogiri and Rest Client to scrape the internet for meaningful dog park information, and geocoded the location and for our custom API in geojson format. On loading we used an ajax call to this API to dynamically load our parks to our map.  The map was created using the Mapbox API and is centered based on the two users lat-long points, which we determined using the users zipcode and the Google Geocode API.",
      featureThreeImg: "images/mapping.png"
    }

    var html = template(context);
    $('body').append(html);
  })

  uncollegeLink.on('click', function(){
    if($('.project-container')){
      $('.project-container').remove();
    }
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);

    var context = {
      projectTitle: "Fellow Tracker",
      description: "Progress tracking tool for coaches and students",
      siteLink: "uncollege-staging.herokuapp.com",
      githubLink: "https://github.com/uncollege",
      backEnd: "Back-End: Rails, Rspec Testing, Postgresql",
      process: "Process: Built using Test Driven Development, Pairing",
      architecture: "Relational data structure, but we used single table inheritance to differentiate between types of users.",
      architectureImg: "images/architecture.jpg",
      featureOne: "Progress Tracking",
      featureOneDescription: "Staff and Coaches can view Fellow's weekly and aggregate progress throughout the program. This also enabled us to create a feature in which staff could track the progress of each cohort as well as the effectiveness of their coaches.",
      featureOneImg: "images/messaging_2.png",
    }
    var html = template(context);
    $('body').append(html);
  })

  marchMadness.on('click', function(){
    if($('.project-container')){
      $('.project-container').remove();
    }
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);

    var context = {
      projectTitle: "Bracketology",
      description: "A Statistics Comparison Application",
      siteLink: "uncollege-staging.herokuapp.com",
      githubLink: "https://github.com/uncollege",
      backEnd: "Back-End: Rails, ESPN webscraper",
      frontEnd: "Front-End: Ember.js, AJAX, jQuery",
      architecture: "Using a relational database for teams scraped from ESPN as well as all of their stats",
      architectureImg: "images/architecture.jpg",
      featureOne: "Data Display",
      featureOneDescription: "Using the outlet features in Ember, we scraped the data to display it side-by-side for bracket comparison",
      featureOneImg: "images/messaging_2.png",
      featureOne: "Bracket Creation",
      featureOneDescription: "Using jQuery, the teams became click-able so that you could select your bracket and save it",
      featureOneImg: "images/messaging_2.png",
    }
    var html = template(context);
    $('body').append(html);
  })
})
