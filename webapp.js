var Ci = Components.interfaces;
var Cc = Components.classes;

function load() {
    var wm = Cc["@mozilla.org/appshell/window-mediator;1"]
              .getService(Ci.nsIWindowMediator);
    var mainWindow = wm.getMostRecentWindow("navigator:browser");
    mainWindow.addEventListener("DOMContentLoaded", function() {
        window.GS.user.IsPremium = true;
    }, false);
}