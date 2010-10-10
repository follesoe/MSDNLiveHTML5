Modernizr.addTest("pinnedsite", function() {
    try {
        return window.external.msIsSiteMode();
    }
    catch(e) {       
        return false; 
    }
});