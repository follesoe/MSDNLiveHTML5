Modernizr.addTest("pinnedsite", function() {
    if (window.external.msIsSiteMode) {
        try {
            return window.external.msIsSiteMode();
        }
        catch(e) {       
            return fale; 
        }
    } else { 
        return false; 
    };
});