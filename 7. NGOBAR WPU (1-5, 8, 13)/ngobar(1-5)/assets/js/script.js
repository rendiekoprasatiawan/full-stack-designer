/* menggunakan JQuery */
// event pada saat di klik
$(".container a").on("click", function (e) {
  // ambil isi href
  const href = $(this).attr("href");
  // tangkap elemen ybs
  const offsetTop = $(href);
  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: offsetTop.offset().top - 50,
    },
    1000,
    "easeInOutBack"
  );
  // nilai default dicegah
  e.preventDefault;
});

// about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
  const wScroll = $(this).scrollTop();

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    $(".portfolio .img-thumbnail").each(function (i) {
      setTimeout(() => {
        $(".portfolio .img-thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
