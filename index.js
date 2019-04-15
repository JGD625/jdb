'use strict';

function displayContact() {
    $('#js-content').empty();
    document.getElementById("js-content").innerHTML = 
    `
    <h2 class="white headline">Let's Connect</h2>
    <hr class="hr1">
    <section id="contact">
    </section>
    `;
}

function displayPortfolio() {
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `
    <h2 class="white headline">Portfolio</h2>
    <hr class="hr1">
    <section class="card-container">
    <div class="card">
    <img src="images/thumb-quiz.jpg" alt="quiz thumbnail" class="portfolio-thumbnail">
    <h3>The Coffee Quiz</h3>
    <hr class="hr1">
    &nbsp;<i class="fab fa-html5 fa-lg teal"></i>&nbsp;<i class="fab fa-css3-alt fa-lg teal"></i>
    <i class="fab fa-js-square fa-lg teal"></i> <br />
    <p>A responsive app that tests a user on coffee lore. The first app I have designed.</p>
    </div>
    <div class="card">
    <img src="images/thumb-spaceX.jpg" alt="spaceX API thumbnail" class="portfolio-thumbnail">
    <h3>SpaceX Launches</h3>
    <hr>
    &nbsp;<i class="fab fa-html5 fa-lg teal"></i>&nbsp;<i class="fab fa-css3-alt fa-lg teal"></i>
    <i class="fab fa-js-square fa-lg teal"></i><br />
    <p>Utilizes the SpaceX API to show details on launches, equipment, and the history of SpaceX.</p>
    </div>
    </section>
    `;
}

function displayProfile(){
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `<h2 class="white headline">Hello!</h2>
    <hr class="hr1">
    
    <img src="images/jdbheadshot1.jpg" alt="Picture of JDB" class="tarot">
    <section id="profile">
    <p>I am training in Full Stack web development with Thinkful. I enjoy watching ideas come to life, solving riddles, and studying languages. My favorite questions are “How?”, and “Why?”. I have a strong sense of design, and enjoy translating a concept into a working experience. I speak HTML, JavaScript, JQuery, CSS, native English and passable Japanese. I currently live in Atlanta.
    </p>
    <p>When I’m away from my desk, I enjoy creating art, reading, hiking, and playing video games. Not to show my age, but I love a classic side scroller. I have lived on two continents, two coasts, am always down for live music and local food. I love adventure.
    </p>
    <p>It’s a pleasure to meet you. My name is Julie.
    </p>

    </section>
    `;
}

function displayResume() {
    $('#js-content').empty();
    document.getElementById("js-content").innerHTML = 
    `<img src="images/jdb.jpg" alt="Picture of JDB" class="tarot">`;
}

