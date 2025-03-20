import { IGroup } from '../../interfaces/appdata';
import Group from './group';

interface IProps {
    groups: IGroup[];
}

function Groups(props: IProps) {
    const { groups } = props;

    groups.sort((a, b) => a.order - b.order);

    return groups.map((group) => {
        return (
            <Group
                key = { group.name.toLowerCase() }
                links = { group.links }
                name = { group.name }
                order = { group.order }
            />
        );
    });
}

export default Groups;
