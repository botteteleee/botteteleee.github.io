function setHtmlFontSize() {
    let fontSize = document.documentElement.clientWidth / 375 * 16
    fontSize > 36 && (fontSize = 36)
    document.documentElement.style.fontSize = fontSize + "px";
}
setHtmlFontSize();
window.addEventListener("resize", setHtmlFontSize);