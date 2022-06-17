document.addEventListener("DOMContentLoaded", ()=>{
    cv_url = "http://github.com/marvmarco/marvmarco.github.io/raw/master/cv.pdf"
    google_viewer = "https://docs.google.com/gview?url="
    url_gv_cv = google_viewer + cv_url + "&embedded=true"
    var view_cv = document.getElementById("viewcv")
    view_cv.href = url_gv_cv
    var download_cv = document.getElementById("downloadcv")
    download_cv.href = cv_url
})