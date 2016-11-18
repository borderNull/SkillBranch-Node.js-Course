export default function getValue(json, path) {
    let result = 'Not Found';

    if (!path)
        return json;

    if (typeof path === 'string') {
        console.log("path: [" + path + "]");
        if (/[^\/\w]/.test(path))
            return result;
        path = path.split(/\//);
    }

    while( path.length ){
        let key = path.shift();

        if (!json.hasOwnProperty(key))
            break;

        if (json.constructor()[key] !== undefined)
            break;

        if (!path.length)
            result = json[key];

        json = json[key];
    }

    return result;
}