export function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export function importAllImages(r) {  
    let images = {};

    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    
    return images;
}