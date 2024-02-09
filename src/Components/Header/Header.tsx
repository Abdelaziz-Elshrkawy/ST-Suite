import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faChevronDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return (
        <div id="header">
            <div id="logo">
                <img src={logo} alt="logo" />
            </div>
            <div id="search-user-cont">
                <div id="search">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: '#808080' }}
                    />
                    <input
                        type="search"
                        id="search-input"
                        placeholder="Search"
                    />
                </div>
                <div id="user-notification-cont">
                    <div id="notifications-cont">
                        <div>
                            <FontAwesomeIcon
                                icon={faBell}
                                size="xl"
                                style={{
                                    color: '#554db7',
                                    cursor: 'pointer',
                                }}
                            />
                            <span id="notification-count">2</span>
                        </div>
                    </div>
                    <div id="user">
                        <img src={user} alt="user" id="user-img" />
                    </div>
                    <div id="name">
                        <p>Moni Roi</p>
                        <p>Admin</p>
                    </div>
                    <div id="drop-down">
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{
                                color: '#565656',
                                cursor: 'pointer',
                            }}
                            size="sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
