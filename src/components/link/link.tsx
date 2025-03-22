import { makeStyles } from 'tss-react/mui';
import { ILink } from '../../interfaces/appdata';
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import { useCallback } from 'react';

type IProps = ILink;

const useStyles = makeStyles()(() => ({
    cardAction: {
        height: '100%',
    },

    iconContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 8px 0 8px',

        '& > img': {
            width: 'auto',
        },
    },
}));

function Link(props: IProps) {
    const { name, icon, url } = props;
    const { classes } = useStyles();

    const onMouseDown = useCallback(
        (event: React.MouseEvent) => {
            console.log(event);
            console.log(url);
        },
        [url],
    );

    return (
        <Card raised>
            <CardActionArea
                className = { classes.cardAction }
                component = "a"
                href = { url }
                onMouseDown = { onMouseDown }
            >
                {icon ? (
                    <Box className = { classes.iconContainer }>
                        <CardMedia
                            alt = { `${name} icon` }
                            component = "img"
                            image = { icon }
                        />
                    </Box>
                ) : undefined}

                <CardContent>
                    <Typography component = "h3">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Link;
