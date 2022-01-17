export default function(str) {
  return str.split('').reduce((result, n) => {
    return result.replace('X', n)
  }, '+XXX (XXX) XX-XX-XX')
}
