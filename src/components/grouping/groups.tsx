import { IGroup } from "../../interfaces/appdata";
import Group from "./group";

interface IProps {
  groups: IGroup[];
}

function Groups(props: IProps) {
  const { groups } = props;

  groups.sort((a, b) => a.order - b.order);

  return groups.map((group) => {
    return (
      <Group
        name={group.name}
        order={group.order}
        links={group.links}
        key={group.name.toLowerCase()}
      />
    );
  });
}

export default Groups;
