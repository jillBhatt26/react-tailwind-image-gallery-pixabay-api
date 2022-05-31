import { FC, FormEvent, FormEventHandler } from 'react';
import { IImageSearchProps } from './interfaces';

const ImageSearch: FC<IImageSearchProps> = ({
    searchTerm,
    setSearchTerm
}): JSX.Element => {
    const handleImageSearch: FormEventHandler<HTMLFormElement> = (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setSearchTerm(searchTerm);
    };

    return (
        <form
            className="w-full max-w-sm px-2 mx-auto my-5"
            onSubmit={handleImageSearch}
        >
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Query"
                    aria-label="Full name"
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default ImageSearch;
