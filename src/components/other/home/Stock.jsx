import React, { useEffect, useState } from "react";

function Stock() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const storedBannerClosed = localStorage.getItem("bannerClosed");
        const storedCloseTime = localStorage.getItem("closeTime");
        let closeTime;

        if (storedBannerClosed === "true" && storedCloseTime) {
            closeTime = new Date(storedCloseTime);
            const now = new Date();
            const timeDiff = now.getTime() - closeTime.getTime();

            if (timeDiff < 3600000) {
                setShowBanner(false);
            } else {
                localStorage.removeItem("bannerClosed");
                localStorage.removeItem("closeTime");
            }
        }

        const closeBtn = document.querySelector(".close_banner");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                const banner_wrapper = document.querySelector('.black')
                const banner = document.querySelector(".stock");
                if (banner) {
                    banner.style.height = "0";
                    banner_wrapper.style.height = "0";
                    localStorage.setItem("bannerClosed", "true");
                    localStorage.setItem("closeTime", new Date().toISOString());
                    // setShowBanner(false);
                }
            });
        }
    }, []);

    if (showBanner) {
        return (
            <div className="stock">
                <div className="black">
                    <div className="banner_links">
                        <a href="#" className="banner_link">
                            Подробнее
                        </a>
                        <a href="#" className="banner_link close_banner">
                            Закрыть
                        </a>
                    </div>
                </div>
                <div className="banner"></div>
            </div>
        );
    } else {
        return null;
    }
}

export default Stock;
