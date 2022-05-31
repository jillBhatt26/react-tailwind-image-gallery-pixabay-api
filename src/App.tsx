import { FC, useState, useEffect, useCallback } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import { fetchImages } from './functions';
import './styles/dist.css';

const App: FC = (): JSX.Element => {
    // component states
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // callbacks
    const fetchImagesCB = useCallback(async () => {
        try {
            const imagesData = await fetchImages(searchTerm);

            setImages(imagesData);
            setIsLoading(false);
        } catch (error: any) {
            console.log('Failed to fetch images from Pixabay', error);
        }
    }, [searchTerm]);

    // component effects
    useEffect(() => {
        fetchImagesCB();
    }, [fetchImagesCB]);

    return (
        <div className="bg-slate-50 h-100">
            <div className="container mx-auto p-5">
                {/* FORM */}
                <ImageSearch
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                {isLoading ? (
                    <h1 className="text-6xl text-center mx-auto mt-32">
                        Loading...
                    </h1>
                ) : images.length === 0 ? (
                    <p className="text-2xl text-red-500 text-center">
                        No images found!
                    </p>
                ) : (
                    <div className="flex flex-col my-2 mx-auto sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                        {images.map((image: any, index: number) => (
                            <ImageCard key={index} image={image} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
