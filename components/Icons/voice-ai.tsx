import React, { PropsWithChildren } from 'react';

type Props = {
    width?: string,
    height?: string,
    fill?: string,
    className?: string
}

const VoiceAi = ({width = "32", height = "32", fill = "currentColor", className}: Props & PropsWithChildren) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
        >
            <path 
                fill={fill} 
                d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm-1 7v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Z"
            />
        </svg>
    );
};

export default VoiceAi;