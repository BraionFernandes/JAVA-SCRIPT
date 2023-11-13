const url=document.getElementById("url")
const btnURL=document.getElementById("btn-url")

btnURL.addEventListener("click",()=>{
    // window.location="https://www.google.com"
    // window.location.replace("https://www.google.com")
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    // console.log(window.history.length)
    // console.log(url.value)
    window.location=url.value
})