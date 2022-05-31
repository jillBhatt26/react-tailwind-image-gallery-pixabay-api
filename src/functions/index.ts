import axios, { AxiosResponse } from 'axios';

const fetchImages = async (searchTerm: string) => {
    const url: string = `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API
    }&q=${searchTerm.trim()}&image_type=photo&pretty=true`;

    const imagesResponse: AxiosResponse = await axios({
        url
    });

    return imagesResponse.data.hits;
};

export { fetchImages };
