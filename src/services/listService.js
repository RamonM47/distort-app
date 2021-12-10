function createList(listData) {
  return fetch(`api/users/${listData.createdBy}/createList`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(listData)
  })
  .then(res => {
    return res.json()
  })
  .catch(err => {
    console.log(err)
  })
}


export{
  createList
}