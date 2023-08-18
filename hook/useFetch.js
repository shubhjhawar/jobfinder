import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key': '218da0cf8amshe00b86c333a6287p19af53jsn9e9e6bb96911',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            console.log(error);
            alert("There is an Error!")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        // console.log("here is the data from API");
        // console.log(data);

    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }


    return { data, isLoading, error, refetch };
      
}

export default useFetch;