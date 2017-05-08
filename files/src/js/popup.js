





// Write all your code above this line. This will reload popup js page in developer tools -> sources when you reload extension from chrome://extensions.
// To avoid executing location.reload(true) in Inspect console to make popup.js appear in developer tools sources
var reload = (function() {
    var executedAlready = false;
    return function() {
        if (!executedAlready) {
            location.reload(true);
            executedAlready = true;
        }
    }
})();
