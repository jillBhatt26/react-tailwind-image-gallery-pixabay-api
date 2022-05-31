import { FC } from 'react';
import { IImageTagProps } from './interfaces';

const ImageTag: FC<IImageTagProps> = ({ tag }) => {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #{tag}
        </span>
    );
};

export default ImageTag;
