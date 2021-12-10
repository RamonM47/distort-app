function follow(followData) {
    return fetch(`/api/users/${followData.userFollowing}/follow`, {
        method: 'PATCH',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(followData)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err)
    })
    
}

export {follow}