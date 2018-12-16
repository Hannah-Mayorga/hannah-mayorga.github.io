    // Resume Section 
    $(document).ready(function () {
        $("#qdoba-flip").click(function () {
            $("#qdoba-panel").slideToggle("slow");
        });
    });
    $(document).ready(function () {
        $("#nextech-flip").click(function () {
            $("#nextech-panel").slideToggle("slow");
        });
    });
    $(document).ready(function () {
        $("#park-flip").click(function () {
            $("#park-panel").slideToggle("slow");
        });
    });
    $(document).ready(function () {
        $("#teenworks-flip").click(function () {
            $("#teenworks-panel").slideToggle("slow");
        });
    });
   
    // Hiding
    // If about is clicked -> show about, hide contact + port 
    // If port is clicked -> show port, hide about + conact
    // If contact is clicked -> show contact, hide port + about
    // If logo is clicked -> show all

    // About
    $(document).ready(function () {
        $("#home-about").click(function () {
            $("#about").show(1000);
        });
    });
    $(document).ready(function () {
        $("#home-about").click(function () {
            $("#portfolio").hide(1000);
        });
    });
    $(document).ready(function () {
        $("#home-about").click(function () {
            $("#contact").hide(1000);
        });
    });
    // Portfolio
    $(document).ready(function () {
        $("#home-portfolio").click(function () {
            $("#portfolio").show(1000);
        });
    });
    $(document).ready(function () {
        $("#home-portfolio").click(function () {
            $("#about").hide(1000);
        });
    });
    $(document).ready(function () {
        $("#home-portfolio").click(function () {
            $("#contact").hide(1000);
        });
    });
    // Contact 
    $(document).ready(function () {
        $("#home-contact").click(function () {
            $("#contact").show(1000);
        });
    });
    $(document).ready(function () {
        $("#home-contact").click(function () {
            $("#about").hide(1000);
        });
    });
    $(document).ready(function () {
        $("#home-contact").click(function () {
            $("#portfolio").hide(1000);
        });
    });
    // Logo
    $(document).ready(function () {
        $("#home-logo").click(function () {
            $("#contact").show(1000);
        });
    });
    $(document).ready(function () {
        $("#home-logo").click(function () {
            $("#about").show(1000);
        });
    });
    $(document).ready(function () {
        $("#home-logo").click(function () {
            $("#portfolio").show(1000);
        });
    });
    // Contact Page Animation 

    // Github
    $(document).ready(function () {
        $("#github").mouseenter(function () {
            $("#github-link").animate({
                height: '150px',
                width: '150px'
            });
        });
    });
    $(document).ready(function () {
        $("#github").mouseleave(function () {
            $("#github-link").animate({
                height: '130px',
                width: '130px'
            });
        });
    });

    // Linkedin
    $(document).ready(function () {
        $("#linkedin").mouseenter(function () {
            $("#linkedin-link").animate({
                height: '150px',
                width: '150px'
            });
        });
    });
    $(document).ready(function () {
        $("#linkedin").mouseleave(function () {
            $("#linkedin-link").animate({
                height: '130px',
                width: '130px'
            });
        });
    });

    // Instagram
    $(document).ready(function () {
        $("#instagram").mouseenter(function () {
            $("#instagram-link").animate({
                height: '150px',
                width: '150px'
            });
        });
    });
    $(document).ready(function () {
        $("#instagram").mouseleave(function () {
            $("#instagram-link").animate({
                height: '130px',
                width: '130px'
            });
        });
    });