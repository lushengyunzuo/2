$(function () {
  var $temp = 0;
  $(".qaq").children().eq($temp).addClass("ative");
  $(".qaq").children().click(function (e) {
    e.preventDefault();
    $(".qaq").children().eq($temp).removeClass("ative").end().eq($(this).index()).addClass("ative");
    $temp = $(this).index()
  })
})