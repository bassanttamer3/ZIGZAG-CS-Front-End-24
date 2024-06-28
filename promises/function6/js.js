function fetchDataWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error('Request timed out'));
        }, timeout);
    });

    const fetchPromise = fetch(url, { signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        });

    return Promise.race([fetchPromise, timeoutPromise]);
}


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetchDataWithTimeout(apiURL, 5000)
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
