export default function handleUndefined(value) {
    if(typeof value === 'undefined'){
        return `no value found`
    }
    else {
        return value
    }
}