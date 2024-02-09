import { NavUnit } from './NavUnit';

export function Nav() {
    return (
        <div id="nav">
            <NavUnit title="Trading" />
            <NavUnit title="Automation" />
            <NavUnit title="Portfolio" />
            <NavUnit title="Alerts" active />
            <NavUnit title="Training" />
        </div>
    );
}
