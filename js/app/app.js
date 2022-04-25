import * as Model from "../model/model.js";

$(document).ready(function () {
    initListeners();
    route();
});

function initListeners() {
    $(window).on("hashchange", route);
}

function route() {
    let hashtag = window.location.hash;
    let page = hashtag.replace("#", "");
    let pageContent = page + "Content";
    if (!page) {
        pageContent = "homeContent";
    }
    Model.pageName(pageContent);
}