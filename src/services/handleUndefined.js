export default function handleUndefined(value) {
    if(typeof value === 'undefined'){
        return `No value found`
    }
    if(value === 'N/A'){
        return `https://via.placeholder.com/500`
    }else {
        return value
    }
}