import React, { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

function LikeComp() {
    const [liked, setLiked] = useState(false);
    return (
        <div>
            {liked ? (
                <IoHeart
                    className="text-danger-deep text-[24px]"
                    onClick={() => setLiked(false)}
                />
            ) : (
                <IoHeartOutline
                    onClick={() => setLiked(true)}
                    className="text-black-300 text-[24px]"
                />
            )}
        </div>
    );
}

export default LikeComp;
