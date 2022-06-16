document.addEventListener("DOMContentLoaded", ()=>{
    const body = document.querySelector("body")
    let cv_link = document.createElement("a")
    cv_link.href = url
    let cv_link_text = document.createTextNode("CV")
    cv_link.appendChild(cv_link_text)
    body.appendChild(cv_link)
})