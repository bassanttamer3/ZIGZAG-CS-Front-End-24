async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json(); 
    } catch (error) {
        if (retries > 0) {
            console.warn(`Retrying... (${retries} attempts left)`);
            await new Promise(resolve => setTimeout(resolve, delay)); 
            return fetchWithRetry(url, options, retries - 1, delay);
        } else {
            throw new Error(`Failed to fetch after ${retries + 1} attempts: ${error.message}`);
        }
    }
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

fetchWithRetry(apiURL, {}, 3, 1000)
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
