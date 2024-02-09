import { NavUnitProps } from '../../Types/types';

export function NavUnit({ title, active }: NavUnitProps) {
    return (
        <div className="nav-uint">
            {!active ? <span className="soon">Coming soon</span> : ' '}
            <div
                className="link-cont"
            >
                <span className={active ? ' link active' : 'link '}>{title}</span>
            </div>
        </div>
    );
}
