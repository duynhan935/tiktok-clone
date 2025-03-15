import styles from "./SuggestedAccounts.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../Popper";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import images from "~/assets/images";
import { AccountPreview } from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx("account-item")}>
                    <img className={cx("avatar")} src={images.noImage} alt="" />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                        </p>
                        <p className={cx("name")}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
