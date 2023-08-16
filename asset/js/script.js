let loader = document.getElementById("loader");
let content = document.getElementById("content");

const initialLoad = () => {
  let loaderInterval = setInterval(() => {
    loader.classList.remove("d-flex");
    loader.classList.add("d-none");
    content.classList.remove("d-none");
    clearInterval(loaderInterval);
  }, 4000);
};

initialLoad();

$("#advance").on("click", function () {
  var $bar = $(".ProgressBar");
  if ($bar.children(".is-current").length > 0) {
    $bar
      .children(".is-current")
      .removeClass("is-current")
      .addClass("is-complete")
      .next()
      .addClass("is-current");
  } else {
    $bar.children().first().addClass("is-current");
  }
});

$("#previous").on("click", function () {
  var $bar = $(".ProgressBar");
  if ($bar.children(".is-current").length > 0) {
    $bar
      .children(".is-current")
      .removeClass("is-current")
      .prev()
      .removeClass("is-complete")
      .addClass("is-current");
  } else {
    $bar
      .children(".is-complete")
      .last()
      .removeClass("is-complete")
      .addClass("is-current");
  }
});
