module.exports = function(location) {
    var a = location.search.replace('?', '').split('&');
    var obj = {};
    for (let i = 0; i < a.length; i++) {
        a[i].split('=')
        obj[a[i].split('=')[0]] = a[i].split('=')[1]
    }
    return obj
}