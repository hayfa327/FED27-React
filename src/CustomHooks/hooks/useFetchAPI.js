import { useState, useEffect } from 'react';

export function useFetchAPI(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(`Failed to fetch data from ${url}:`, err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData(); // Call the async function
    }, [url]); // Add url as dependency

    return { data, isLoading };
}