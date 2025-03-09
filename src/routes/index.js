// Layouts
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following,
    },
    {
        path: "/user/:nickname",
        // nghĩa là những trang có đuôi là @... dấu : là có thể thay đổi tùy ý
        component: Profile,
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly,
    },
];
// Những router dành cho những trang không cần đăng nhập

const privateRoutes = [];
// Những router dành cho những trang cần đăng nhập

export { publicRoutes, privateRoutes };
