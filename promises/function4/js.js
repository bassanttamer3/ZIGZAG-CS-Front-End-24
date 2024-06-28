    function fetchUrls(urls) {
        const promises = urls.map(url => {
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed ");
                    }
                    return response.json();
                });
        });
    
        return Promise.all(promises);
    }
    
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];
    
    
    fetchUrls(urls)
        .then(responses => {
            console.log('combined result:', responses);
        })
        .catch(error => {
            console.error('Error fetching URLs:', error);
        });
