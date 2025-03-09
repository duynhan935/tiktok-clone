import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "~/hooks";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Áp dụng useDebounce
    const debounced = useDebounce(searchValue, 500);
    // Gỉải thích
    // Lần chạy đầu tiên cái debounce sẽ ra chuỗi rỗng
    // Lần 2 ví dụ gõ 1 chữ 'h', value được truyền vào nhưng sẽ bị delay một khoảng nên nó vẫn sẽ trả về chuỗi rỗng
    // Đến lần 3,4,5 gì thì nó vẫn sẽ bị delay và trả về chuỗi rỗng, chỉ khi ta dừng nhập và sau khi hết thời gian delay nó sẽ trả về kết quả sau cùng

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            // encodeURIComponent mã hóa dữ liệu lại cho nó đừng có trùng với cái parameter
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive="true"
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

                <button className={cx("search-btn")}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
