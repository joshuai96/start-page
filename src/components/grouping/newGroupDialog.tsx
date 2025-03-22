import {Box, TextField, Button} from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { createGroup } from './functions';

interface IProps {
    readonly open: boolean;
    readonly onClose: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
    readonly createGroup: createGroup
}

function NewGroupDialog(props: IProps) {
    const { open, onClose, createGroup } = props;
    const { t } = useTranslation();
    const [validName, setValidName] = useState(true);
    const [validOrder, setValidOrder] = useState(true);

    const onGroupSubmit = useCallback((form: FormData) => {
        const name = form.get('group-name') as string | null;
        if (!name) {
            console.warn('no group name given');
            return;
        }

        const rawOrder = form.get('group-order') as string | null
        if (!rawOrder) {
            console.warn('no group order given');
            return
        }

        const order = parseInt(rawOrder);
        if (isNaN(order)) {
            console.warn('invalid group order');
            return
        }

        createGroup(
            name,
            order
        );

        onClose({}, 'escapeKeyDown')
    }, [ createGroup, onClose ]);

    const validateName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setValidName(false);
        } else {
            setValidName(true);
        }
    }, []);

    const validateOrder = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);

        if (isNaN(value) || value < 0) {
            setValidOrder(false);
        } else {
            setValidOrder(true);
        }
    }, []);

    return (
        <Dialog
            onClose = { onClose }
            open = { open }
        >
            <DialogTitle>
                {t('groups.add')}
            </DialogTitle>

            <Box
                action = { onGroupSubmit }
                component = 'form'
            >
                <DialogContent>
                    <TextField
                        error = { !validName }
                        id = 'group-name-input'
                        label = { t('groups.name') }
                        name = 'group-name'
                        onChange = { validateName }
                        required
                        variant = 'standard'
                    />

                    <TextField
                        error = { !validOrder }
                        id = 'group-order-input'
                        label = { t('groups.order') }
                        name = 'group-order'
                        onChange = { validateOrder }
                        required
                        type = 'number'
                        variant = 'standard'
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        type = 'submit'
                    >
                        {t('send')}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default NewGroupDialog;
