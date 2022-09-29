import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            const { data: reponseData } = await axios.get(url);
            setData(reponseData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetch;