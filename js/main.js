
$(document).ready(function () {
    $("#show-search-form").click(function () {
    $(".hide-sform").toggleClass("show-sform");
    });
          
    $('.toggle-nav').on('click', function() {
    $('.link-list').toggleClass('is-open');
    });
});