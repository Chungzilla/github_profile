axios.get('https://api.github.com/users/Chungzilla', { headers: {"Authorization" : `Bearer  083ef87ceca58af833001108ef8f06c0452fe638`}}).then((response) => {
    console.log(response.data);
    let data = response.data;
    
    
    
    let ownerWrapper = document.createElement('div')
    ownerWrapper.classList.add('owner');
    document.body.appendChild(ownerWrapper)

    let avatar = data.avatar_url
    let repos = data.public_repos
    let url = data.html_url
    let followers = data.followers
    let followerURL = data.followers_url
    let followed = data.following
    let followingURL = data.followingURL

// This will render the avatar

    let img = document.createElement('img');
    img.src = `${avatar}`;
    ownerWrapper.appendChild(img)
    
//Show number of repos

    let repoCount = document.createElement('p')
    repoCount.innerText = 'Repositories: ' + `${repos}`
    ownerWrapper.appendChild(repoCount)

//Show number of followers
    let followCount = document.createElement('p')
    followCount.innerText = 'Total Followers: ' + `${followers}`
    ownerWrapper.appendChild(followCount)

//Button to link to Github
    let toGithub = document.createElement('a')
    toGithub.setAttribute('href', `${url}`)
    toGithub.innerText = 'Visit Github'
    ownerWrapper.appendChild(toGithub)





//Foll




    

});


    
   


 




