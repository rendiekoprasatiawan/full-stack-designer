$(window).scroll(function () {
  if ($(this).scrollTop() > 135) {
    $("#task_flyout").addClass("navbar-fixed-top");
  } else {
    $("#task_flyout").removeClass("navbar-fixed-top");
  }
});

/* menggunakan JQuery */
// event pada saat di klik
$(".container a").on("click", function (e) {
  // ambil isi href
  const href = $(this).attr("href");
  // tangkap elemen ybs
  const offsetTop = $(href);
  // pindahkan scroll
  $("html, .documentation").animate(
    {
      scrollTop: offsetTop.offset().top - 230,
    },
    1000,
    "easeInOutExpo"
  );
  // nilai default dicegah
  e.preventDefault;
});
