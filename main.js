"use strict";

// JSON for exporting tranlsations
var transObject = {};

/* Saving translation target element when the function openModal is called
 * because when function recordTranslation is called, this will be the button
 * in modal instead of the needed translation target element. */
var currentTarget;

var openModal = function() {
    currentTarget = this;
    var origMessage = $(currentTarget).text().trim();
    var $transMessage = $("textarea[name='trans-message']");

    // Fill up the modal with orignal message
    $transMessage.val(origMessage);
    $('#transModal').modal("show");
};

var recordTranslation = function() {
    var $transID = $("textarea[name='trans-id']");
    var $transMessage = $("textarea[name='trans-message']");
    var origHeight = $(currentTarget).height(),
        origWidth = $(currentTarget).width();

    transObject[$transID.val()] = [$(currentTarget).text()]
    $(currentTarget).html($transMessage.val());
    dimensionChangedAlert($(currentTarget), origHeight, origWidth, 0.2);
    transObject[$transID.val()].push($transMessage.text());
    $transID.val("");
    $transMessage.val("");
};

// Threshold for significant change can be customized
var dimensionChangedAlert = function($el, origHeight, origWidth, threshold) {
    var newHeight = $(currentTarget).height(),
        newWidth = $(currentTarget).width();

    if (newHeight > origHeight * (1 + threshold) ||
        newHeight < origHeight * (1 - threshold) ||
        newWidth > origWidth * (1 + threshold) ||
        newWidth < origWidth * (1 - threshold) ) {
        $el.css("background-color", "rgba(255, 0, 0, 0.5)");
    }
}

var exportJSON = function() {
    $("<a />", {
        "download": "translation.json",
        "href" : "data:application/json;charset=utf-8," + encodeURIComponent(
            JSON.stringify(transObject, null, 4)
        )
    }).appendTo("body").on("click", (function() {
        $(this).remove()
    }))[0].click()
};

/* main function
 * Added to the web app after the window is done with loading */
var main = function() {
    $(".translation-target").on("click", openModal);
    $("#submit-translation").on("click", recordTranslation);
    $("#export-translations").on("click", exportJSON);
};

window.addEventListener('load', main);
