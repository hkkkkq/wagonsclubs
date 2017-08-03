module.exports = function(win, doc) {
    var rem = 50 / 375 * doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = rem + 'px';
    win.onresize = function() {
        rem = 50 / 375 * doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem + 'px';
    };
}