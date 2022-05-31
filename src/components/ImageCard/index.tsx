import React, { FC } from 'react';
import ImageTag from './components/ImageTag';
import { IImageCardProps } from './interfaces';

const ImageCard: FC<IImageCardProps> = ({ image }): JSX.Element => {
    return (
        <div className="md:max-w-xs mx-auto rounded overflow-hidden shadow-lg">
            <img src={image.largeImageURL} alt="Unsplash" className="w-full" />

            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo By {image.user}
                </div>

                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                    <li></li>
                </ul>
            </div>
            <div className="px-6 py-4 space-x-2">
                {image.tags.split(',').map((tag: string, index: number) => (
                    <ImageTag key={index} tag={tag.trim()} />
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
