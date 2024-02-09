import AnnouncementsUnit from './AnnouncementsUnit';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
export default function Announcements() {
    return (
        <div id="announcements">
            <div className="announcement-unit" id="last-announcement">
                <div id="details">
                    <div className="sub-detail">
                        <AttachMoneyOutlinedIcon
                            className="sub-detail-icon"
                        />
                        <p>$TSLA</p>
                    </div>
                    <div className="sub-detail">
                        <DescriptionOutlinedIcon
                            className="sub-detail-icon"
                        />
                        <p>200 Contracts</p>
                    </div>
                    <div className="sub-detail">
                        <InsightsOutlinedIcon
                            className="sub-detail-icon"
                        />
                        <p>12.2%</p>
                    </div>
                    <div className="sub-detail">
                        <PriceChangeOutlinedIcon
                            className="sub-detail-icon"
                        />
                        <p>High risk</p>
                    </div>
                </div>
                <p id="message">
                    Someone Just bought xxxx contracts of $XYZ, this is notable
                    because the relative volume on this options trade is X.X%.
                </p>
            </div>
            <AnnouncementsUnit body="X company released a short report on $XYZ, High IV option sales opps" />
            <AnnouncementsUnit body="X company released a short report on $XYZ, High IV option sales opps" />
            <AnnouncementsUnit body="X company released a short report on $XYZ, High IV option sales opps" />
            <AnnouncementsUnit body="X company released a short report on $XYZ, High IV option sales opps" />
        </div>
    );
}
