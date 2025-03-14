import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx("wrapper")}>
            <Image className={cx("avatar")} src={data.avatar} alt="Hoaa" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
                </h4>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
