export default a  => {
  const charcode = a.charCodeAt();
  if ( charcode >= 1040 && charcode <= 1047) {
    return {
      background: '#d6eede',
      color: `#80c980`
    }
  }
  if ( charcode >= 1048 && charcode <= 1055) {
    return {
      background: '#efdadf',
      color: `#f17179`
    }
  }
  if ( charcode >= 1049 && charcode <= 1063) {
    return {
      background: '#efe9f3',
      color: `#c777d3`
    }
  }
  if ( charcode >= 1064 && charcode <= 1071) {
    return {
      background: '#F8ECD5',
      color: `#F1A32F`
    }
  }
  if ( charcode >= 1064 && charcode <= 1071) {
    return {
      background: '#E9F5FF',
      color: `#2A86FF`
    }
  }
  return {
    background: '#E9F5FF',
    color: `#2A86FF`,
  }
}
