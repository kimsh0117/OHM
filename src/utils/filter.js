const regfilter = (wordToMatch,title)=>{
  const regex = new RegExp(wordToMatch, 'gi');
  return title.match(regex)
}