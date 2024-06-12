  
  
  // URL do arquivo JSON local
const url = './assets/modafy.json';

// Função para buscar e exibir tweets
async function fetchTweets() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const tweetsContainer = document.getElementById('feed-tweets');
        data.tweets.forEach(tweet => {
            const tweetElement = document.createElement('div');
            tweetElement.className = 'feed-tweet';

            const imgElement = document.createElement('img');
            imgElement.className = 'tweet-img';
            imgElement.src = tweet.user.profile_pic; // Usar o caminho do profile_pic
            tweetElement.appendChild(imgElement);

            const tweetDetailsElement = document.createElement('div');
            tweetDetailsElement.className = 'feed-tweet-details';

            const tweeterDetailsElement = document.createElement('div');
            tweeterDetailsElement.className = 'tweeter-details';
            const tweeterNameElement = document.createElement('a');
            tweeterNameElement.href = '';
            tweeterNameElement.className = 'tweeter-name';
            tweeterNameElement.innerHTML = `${tweet.user.name} <span class="tweeter-handle">@${tweet.user.name} • 1h</span>`;
            tweeterDetailsElement.appendChild(tweeterNameElement);

            const moreIconElement = document.createElement('i');
            moreIconElement.className = 'material-icons-outlined';
            moreIconElement.textContent = 'more_horiz';
            tweeterDetailsElement.appendChild(moreIconElement);

            tweetDetailsElement.appendChild(tweeterDetailsElement);

            const tweetTextElement = document.createElement('div');
            tweetTextElement.className = 'tweet-text';
            tweetTextElement.innerHTML = `<p>${tweet.text}</p>`;
            tweetDetailsElement.appendChild(tweetTextElement);

            const tweetIconsElement = document.createElement('div');
            tweetIconsElement.className = 'tweet-icons';
            tweetIconsElement.innerHTML = `
                <div><i class="material-icons-outlined">chat_bubble_outline</i> ${tweet.stats.comments}</div>
                <div><i class="material-icons-outlined">restart_alt</i> ${tweet.stats.retweets}</div>
                <div><i class="material-icons-outlined">favorite_border</i> ${tweet.stats.likes}</div>
                <div><i class="material-icons-outlined">upload</i></div>
            `;
            tweetDetailsElement.appendChild(tweetIconsElement);

            tweetElement.appendChild(tweetDetailsElement);
            tweetsContainer.appendChild(tweetElement);
        });
    } catch (error) {
        console.error('Erro ao buscar tweets:', error);
    }
}

// Buscar e exibir tweets ao carregar a página
fetchTweets();
