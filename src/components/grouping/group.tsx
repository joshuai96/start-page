import { IGroup } from "../../interfaces/appdata";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "../link/link";
import { makeStyles } from "tss-react/mui";

type IProps = IGroup;

const useStyles = makeStyles()(() => ({
  groupStack: {
    flexWrap: "wrap",
  },
}));

function Group(props: IProps) {
  const { name, links } = props;
  const { classes } = useStyles();

  const groupName = name.toLowerCase();

  links.sort((a, b) => a.order - b.order);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        aria-controls={`${groupName}-content`}
        expandIcon={<ExpandMoreIcon />}
        id={`${groupName}-header`}
      >
        <Typography component="h2">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="row"
          useFlexGap
          className={classes.groupStack}
          spacing={5}
        >
          {links.map((link) => {
            const linkName = link.name.toLowerCase();
            return (
              <Link
                key={`${groupName}-${linkName}`}
                name={link.name}
                order={link.order}
                url={link.url}
                icon={link.icon}
              ></Link>
            );
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default Group;
