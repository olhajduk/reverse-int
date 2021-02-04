module.exports = function reverse(n) {

    const stringReversed = n.toString().split('').reverse().join('')
    const nReversed = parseInt(stringReversed)

    return nReversed
}
