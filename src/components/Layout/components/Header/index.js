import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/@hoaa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="Tiktok" />
                {/* Search */}

                <Search />

                {/* Actions */}
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>5</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/468957911_1289710888730506_470623878030858958_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=asv3dpABVs4Q7kNvgGOAzmB&_nc_oc=AdhrKVezTxYUrJTQPXM578e8iKakZb5Le99Ospv28uRLrQSQBcq9JAvYu5UxaGT2j5VL8MSOHGQr2f3-eM7dR6Qt&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AhpCQq9xUIBSb-ifPhm9vm0&oh=00_AYGSJKf5hTc_Tkx5a0CFHho3O1iq1jA7kOOYWGbAcVA6Ng&oe=67D0AA0F"
                                // src="aa"
                                className={cx("user-avatar")}
                                alt="Tran Duy Nhan"
                                fallback="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/326530502_1142370256453171_3882624507058146724_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4Suwz4S-p4MQ7kNvgEFyfjd&_nc_oc=AdgOlcq3cS3E21v-lAkvBzpYyIHWzqEInCQYaSmKzc0ncPs-vUzEfhRYg4N0hEgYigQ74D9tHcyD5kRSH6r842R-&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=AnzcBT4ixG9GMyIP15lKUGD&oh=00_AYFu1oFMo5mx-1_mH4CjXkt4ED-uTdcEDi_5vMUQJq2Fvg&oe=67D0C615"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
