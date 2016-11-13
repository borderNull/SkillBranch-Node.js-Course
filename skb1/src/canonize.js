function canonize(url) {
    const reg = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
    const username = url.match(reg)
    return username;
}




