export default  function canonize(url) {

    const reg = new RegExp('@?(https?:)?(\/\/)?(\w*[^\/]*\/)?((w+)[^\/])?((twitter|github|telegram|vk|vkontakte)[^\/]*\/)?(@?[a-zA-Z][^\/]*)', 'i');
    let username = url.match(reg)[8];
    
    if (username.charAt(0) == '@') {
        return username
    }
    return '@' + username;
}




