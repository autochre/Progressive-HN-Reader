function parseJSON (response){
  return response.json()
}

async function updateEntries(){
  const entries = getEntryContainers()
  try {
    const topstories = await getTopstories()
    // the amount of displayed stories is bound to the entry elements in index.html
    entries.map(async function(entry, index){
      const story = await getStory(topstories[index])
      updateEntry(entry, story)
      })
  } catch (err){
    console.log(err.message)
  }
}

async function getTopstories(){
  try {
    let data = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    let parsedData = await parseJSON(data)
    if(parsedData == null) { throw new Error('invalid ID') }
    else { return parsedData }
  } catch (err){
    return err
  }
}

async function getStory(storyID){
  try {
    let data = await fetch('https://hacker-news.firebaseio.com/v0/item/' + storyID + '.json')
    let parsedData = await parseJSON(data)
    if(parsedData == null) { throw new Error('invalid ID') }
    else { return parsedData }
    return parsedData
  } catch (err) {
    return err
  }
}

function updateEntry(entry, story){
  entry.innerHTML = '<h4>' + story.title + '</h4><a href="'+story.url+'">' + story.url + '</a>'
}

function getEntryContainers(){
  // nodeList to Array conversion
  return Array.prototype.slice.call(document.getElementsByClassName('entry-container'))
}

export { updateEntries, getTopstories, getStory}
