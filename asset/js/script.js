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
