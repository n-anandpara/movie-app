import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Grid, Grow } from '@/components/materialUiComponents/MaterialUiComponents';
import MovieCard from '@/components/mainview/card/MovieCard';
import PreviewCard from '@/components/mainview/previewCard/PreviewCard';

import { Movie } from '@/types/movieData';
import useDeviceSize from '@/types/useDeviceSize';

/**
 * Component renders the list of movies and it's preview.
 *
 */
export default function MovieList({moviesData, hidePreview, setHidePreview} : {
    moviesData: Array<Movie>,
    hidePreview: boolean,
    setHidePreview: (value: boolean) => void
}) {

    let menuWidth = 275;
    let totalMargin = 92;
    let remainingSpace = 0;
    let cardWidth = 196;

    const [width] = useDeviceSize();
    const [showPreview, setShowPreview] = useState(false);
    
    remainingSpace = width - menuWidth - totalMargin;

    
    let row = 1;
    let column = 1;
    let previewCardE: string | number | NodeJS.Timeout | undefined;

    useEffect(() => {
        hidePreview && 
        setShowPreview(false);
        const rowToCheck = document.getElementById(`previewRow`);
        if (rowToCheck) {
            rowToCheck.remove();
        }

    }, [hidePreview]);

    const onCardClick = (cardId: string, movie: Movie) => {
        setShowPreview(true);
        setHidePreview(false);
        const renderingRow = cardId.slice(0,1);

        // Checks if previewRow is available it will reomve it.
        const rowToCheck = document.getElementById(`previewRow`);
        if (rowToCheck) {
            rowToCheck.remove();
        }

        // Adding previewRow whereever needed.
        const firstElementOfRow = document.getElementById(`row-${renderingRow}-column-1`);
        var cardRendering = document.createElement("div");
        cardRendering.id = `previewRow`;
        cardRendering.style.width = '-webkit-fill-available';
        firstElementOfRow?.parentNode?.insertBefore(cardRendering, firstElementOfRow);
        let height = 0;

        // Animation to create space to render previewCard
        function frame() {
          if (width>768 ? height == 460 : height == 1100) {
            clearInterval(previewCardE);
          } else {
            height += 5;
            cardRendering.style.height = height + "px"; 
          }
        }
        previewCardE = setInterval(frame, 0.0001);

        // Creating PreviewCard and rendering it in DOM
        const previewRow = ReactDOM.createRoot(document.getElementById(`previewRow`) as HTMLElement);
        previewRow.render(
            <React.StrictMode>
                <Grow
                    in={true}
                    {...(showPreview ? { timeout: 1000 } : {})}
                    unmountOnExit
                    style={{ transitionDelay: `500ms`, transformOrigin: '0 0 1000' }}
                >
                    <Grid container columns={1} pl={3}>
                        <PreviewCard movie={movie} showPreview={showPreview} />
                    </Grid>
                </Grow>
            </React.StrictMode>
        );
    }

    return (
        <Grid container columnSpacing={3} rowSpacing={2}  mt={3}>
            {
                moviesData.map(movie => {
                    let currentRow = row;
                    let currentColumn = column;

                    // Calculation to give css class to each card with it's row-column number 
                    remainingSpace = remainingSpace - cardWidth;
                    if (remainingSpace < cardWidth || remainingSpace < 0) {
                        remainingSpace = width - menuWidth - totalMargin;
                        row += 1;
                        column = 1;
                    } else {
                        column +=1;                            
                    }
                    
                    return (
                       <Grid
                        item
                        key={movie.Title}
                        className={`row-${currentRow}-column-${currentColumn}`}
                        id={`row-${currentRow}-column-${currentColumn}`}
                        >
                            <MovieCard
                                movie={movie}
                                onCardClick={onCardClick}
                                cardId={`${currentRow}-${currentColumn}`}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}



