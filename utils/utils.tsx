export const setPadding = (...args: [number, number?, number?, number?]) => {
    const [a, b = a, c = a, d = b ?? a] = args
    return {
        paddingTop: a,
        paddingRight: b,
        paddingBottom: c,
        paddingLeft: d,
    }
}