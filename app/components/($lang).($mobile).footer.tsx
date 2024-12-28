import CustomLink from "~/components/CustomLink";

export default function Footer() {

    return <footer className="py-4">
        <div className="container mx-auto text-center">
            <p>Copyleft <span
                className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">LimeNetwork</span> and
                all contributors 2024.</p>
            <p>Blophy开源论坛项目 支持:support@blophy.net</p>
            <p></p>
            <div className="mt-2">
                <CustomLink
                    to="/privacy"
                    className="text-blue-400 hover:underline mx-2"
                >
                    隐私政策
                </CustomLink>
                |
                <CustomLink
                    to="/terms"
                    className="text-blue-400 hover:underline mx-2"
                >
                    服务条款
                </CustomLink>
            </div>
        </div>
    </footer>;
}
