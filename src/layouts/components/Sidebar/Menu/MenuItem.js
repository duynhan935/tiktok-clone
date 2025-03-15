import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx("menu-item", { active: nav.isActive })} to={to}>
            {/* chỗ này viết vậy để khi nó được active thì class active sẽ được thêm vào theo dạng của cái cx, nó sẽ kiểm tra xem cái nav.isActive của thằng NavLink có true hay ko để nó thêm class active theo cái dạng mà thằng cx hiểu và có thể ăn css */}
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={cx("title")}>{title}</span>
                </>
            )}
        </NavLink>
        // Thẻ NavLink nó tự động thêm class active khi bấm vào
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    active: PropTypes.node.isRequired,
};
export default MenuItem;
