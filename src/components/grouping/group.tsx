import { IGroup } from '../../interfaces/appdata';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '../link/link';
import { makeStyles } from 'tss-react/mui';

type IProps = IGroup;

const useStyles = makeStyles()(() => ({
    groupAccordion: {
        width: '100%',
    },
    groupStack: {
        flexWrap: 'wrap',
    },
}));

function Group(props: IProps) {
    const { name, links } = props;
    const { classes } = useStyles();

    const groupName = name.toLowerCase();

    links.sort((a, b) => a.order - b.order);

    return (
        <Accordion
            className = { classes.groupAccordion }
            defaultExpanded
        >
            <AccordionSummary
                aria-controls = { `${groupName}-content` }
                expandIcon = { <ExpandMoreIcon /> }
                id = { `${groupName}-header` }
            >
                <Typography component = "h2">
                    {name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Stack
                    className = { classes.groupStack }
                    direction = "row"
                    spacing = { 5 }
                    useFlexGap
                >
                    {links.map((link) => {
                        return (
                            <Link
                                icon = { link.icon }
                                id = { link.id }
                                key = { link.id }
                                name = { link.name }
                                order = { link.order }
                                url = { link.url }
                            />
                        );
                    })}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default Group;
