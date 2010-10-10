Modernizr.addTest("insitemode", function() {
    try {
        return window.external.msIsSiteMode();
    }
    catch(e) {       
        return false; 
    }
});

Modernizr.addTest("sitemode", function() {
    try {
        window.external.msIsSiteMode();
        return true;
    }
    catch(e) {       
        return false; 
    }
});