const shortenUrl = async () => {
    const longUrl = document.querySelector('.input').value;
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const shortUrl = await response.text();

        // Display the shortened URL
        const shortUrlInput = document.querySelector('.output');
        shortUrlInput.value = shortUrl;
    } catch (error) {
        console.error('Error occurred while shortening URL:', error);
    }
};

const shortenBtn = document.querySelector('.button');
shortenBtn.addEventListener('click', shortenUrl);