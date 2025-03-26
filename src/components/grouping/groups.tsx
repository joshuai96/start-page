import { IGroup } from '../../interfaces/appdata';
import Group from './group';
import { Divider, Button } from '@mui/material';
import { List, ListItem } from '@mui/material';
import { Add } from '@mui/icons-material';
import NewGroupDialog from './newGroupDialog';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { createGroup } from './functions';

interface IProps {
    readonly groups: IGroup[];
    readonly createGroup: createGroup;
}

function Groups(props: IProps) {
    const { groups, createGroup } = props;
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const onOpenDialog = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const onCloseDialog = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    groups.sort((a, b) => a.order - b.order);

    return (
        <>
            <List>
                {groups.map((group) => {
                    return (
                        <ListItem key = { group.id }>
                            <Group
                                id = { group.id }
                                links = { group.links }
                                name = { group.name }
                                order = { group.order }
                            />
                        </ListItem>
                    );
                })}

                {groups.length > 0 && <Divider />}

                <ListItem>
                    <Button
                        onClick = { onOpenDialog }
                        startIcon = { <Add /> }
                        variant = "contained"
                    >
                        {t('groups.add')}
                    </Button>
                </ListItem>
            </List>

            <NewGroupDialog
                createGroup = { createGroup }
                onClose = { onCloseDialog }
                open = { open }
            />
        </>
    );
}

export default Groups;
