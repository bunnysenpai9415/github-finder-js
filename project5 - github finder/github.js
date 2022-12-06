class GitHub {
    constructor() {
        this.client_id = 'e57c3f46bc1a3b241b9c';
        this.client_secret = '41053f507627115db9fd4b1073578652803031fc';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileRes.json();
        const repos = await repoRes.json();


        return{
            profile,
            repos
        }
    }
}