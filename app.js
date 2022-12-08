// Init GitHub 
const github = new GitHub;
// Init UI
const ui = new UI;

// search input and add event listener 
const searchUser = document.getElementById('searchUser').addEventListener('keyup', (e) => {
    // get input text 
    const userText = e.target.value;

    if (userText !== '') {
        // make http call   
        github.getUser(userText)
            .then(async data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    // show profile
                    await ui.showProfile(data.profile);
                    await ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile 
        ui.clearProfile()
    }
});
