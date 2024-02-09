import { AnnouncemetUnitProps } from '../../Types/types';

export default function AnnouncementsUnit({ body }: AnnouncemetUnitProps) {
    return (
        <div className="announcement-unit">
            <p>{body}</p>
        </div>
    );
}
