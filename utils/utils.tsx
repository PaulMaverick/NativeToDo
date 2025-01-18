export const setPadding = (...args: [number, number?, number?, number?]) => {
    const [a, b = a, c = a, d = b ?? a] = args
    return {
        paddingTop: a,
        paddingRight: b,
        paddingBottom: c,
        paddingLeft: d,
    }
}

let lastNum = 0;

export const setID = () => {
    const max = 100000;
    let result
    do {
        result = Math.floor(Math.random() * max);
    } while(result === lastNum);

    lastNum = result;
    return result;
}