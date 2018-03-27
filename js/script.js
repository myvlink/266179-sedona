var searchButton = document.querySelector(".button-search-form");
var searchForm = document.querySelector(".search-hotel-form");
searchButton.addEventListener("click", function (evt) {
	evt.preventDefault();
    searchForm.classList.toggle("search-hotel-form-opened");
    searchButton.blur();
});