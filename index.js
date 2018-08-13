const app = "I don't do much.";
const token = 'c0005614919b2895d90ff8afdcb53da653bbf160'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
