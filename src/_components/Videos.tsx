import { useEffect } from 'react';

export const Videos = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="container mx-auto p-6">
            <hr className="border-t-2 border-gray-100 my-8 dark:border-zinc-700" />

            <div className="flex flex-col md:flex-row justify-between">
                {/* Text section */}
                <div className="max-w-md w-full mb-6 md:mb-0 md:pr-6"> 
                    <h1 className="text-3xl font-bold mb-4 dark:text-white">VIDEOS</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Here are the exciting trailer for our upcoming film 'Bloody Pals'. Below this video you can find the behind the scenes
                        for some of the production of the Bloody Pals movie.
                    </p>
                </div>

                {/* Video section */}
                <div className="flex flex-col w-full md:max-w-4xl"> 
                    {/* Bloody Pals Trailer */}
                    <div className="flex justify-center items-center mb-10">
                        <iframe 
                            className="rounded-lg shadow-lg" 
                            width="100%" 
                            height="500px" 
                            src="https://www.youtube.com/embed/6QSWWOK_oBY" 
                            title="Bloody Pals Trailer" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* Behind The Scenes */}
                    <div className="flex justify-center items-center">
                        <iframe 
                            className="rounded-lg shadow-lg" 
                            width="100%" 
                            height="500px" 
                            src="https://www.youtube.com/embed/6QSWWOK_oBY" 
                            title="John Wick Trailer" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;
