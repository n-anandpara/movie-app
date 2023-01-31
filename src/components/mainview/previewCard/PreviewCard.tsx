import { Button, Card, CardActions, CardMedia, Table, TableCell, TableRow, Grid, TableBody, Zoom, Fade, Slide } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Movie } from "@/types/movieData";
import styles from './PreviewCard.module.css';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useRef } from "react";
import useDeviceSize from "@/types/useDeviceSize";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`&.${linearProgressClasses.bar1Buffer}`]: {
      borderRadius: 5,
      backgroundColor: '#00E0FF',
    }
  }));

export default function PreviewCard({movie, showPreview} : {
    movie: Movie,
    showPreview: boolean
}) {

    let rating: number = +movie.imdbRating;
    const containerRef = useRef(null);
    let renderingTable = [
        {
            key: 'Year',
            value: movie.Year,
        },
        {
            key: 'Running Time',
            value: movie.Runtime,
        },
        {
            key: 'Directed by',
            value: movie.Director,
        },
        {
            key: 'Language',
            value: movie.Language,
        },
    ]
    return (
        <Card className={styles.previewCard} ref={containerRef}>
            <Fade
                in={true}
                style={{ transitionDelay: `1000ms` }}
                timeout={200}
                unmountOnExit
            >
                <CardMedia
                    component="img"
                    image={movie.Poster}
                    alt={movie.Title}
                    className={styles.previewPoster}
                />
            </Fade>
            <Zoom
                in={true}
                style={{ transitionDelay: `1000ms` }}
                timeout={500}
                unmountOnExit
            >
            <Grid className={styles.contentContainer}>
                <Typography variant="h3" fontSize={30} fontWeight={700} noWrap >{movie.Title}</Typography>
                {
                    !isNaN(rating) && (
                        <Grid container spacing={2} className={styles.rating}>
                            <Grid item alignSelf="center">
                                <BorderLinearProgress
                                    className={styles.ratingBar}
                                    variant="buffer"
                                    value={rating * 10}
                                    valueBuffer={rating * 10}
                                    classes={{ bar1Buffer: styles.bar1Buffer }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>{`${rating} / 10`}</Typography>
                            </Grid>
                        </Grid>
                    )
                }
                <Table className={styles.previewTable}>
                    <TableBody>
                        {renderingTable.map((data) => {
                            return (
                                <TableRow key={data.key}>
                                    <TableCell className={styles.previewTableCell}>{data.key}: </TableCell>
                                    <TableCell className={styles.previewTableCell}>{data.value}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Typography variant="body1">{movie.Plot}</Typography>  
                <CardActions className={styles.actionsButtons}>
                    <Button variant="contained" className={styles.containedPrimary}>
                        Play Movie
                    </Button>
                    <Button variant="outlined" className={styles.outlinedPrimary}>
                        Watch Trailer
                    </Button>
                </CardActions>
            </Grid>
            </Zoom>
        </Card>
    );
}
