import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@/components/materialUiComponents/MaterialUiComponents';
import { PlayCircleOutlineIcon, AddCircleOutlineIcon} from '@/components/materialUiComponents/MaterialIcons';
import { Movie } from "@/types/movieData";
import styles from './MovieCard.module.css';
import useDeviceSize from '@/types/useDeviceSize';

export default function MovieCard({movie, onCardClick, cardId} : {
    movie: Movie,
    onCardClick: (cardId: string, movie: Movie) => void,
    cardId: string
}) {

    const [width] = useDeviceSize();

    return (
        <Card className={styles.card}>
            <CardMedia
                component="img"
                height={(width>768) ? 278 : 100}
                width='auto'
                image={movie.Poster}
                alt={movie.Title}
                className={styles.cardMedia}
                onClick={() => onCardClick(cardId, movie)}
            />
            <CardContent className={styles.cardContent}>
                <Typography
                    variant="h6" 
                    noWrap
                    fontSize={16}
                    fontWeight={600}
                >
                    {movie.Title}
                </Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <IconButton aria-label="Play">
                    <PlayCircleOutlineIcon />
                </IconButton>
                <IconButton aria-label="Add to watch list">
                    <AddCircleOutlineIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
