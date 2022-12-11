import React from 'react';

const Menu = () => {
    return ( 
        <div className="menu-container mt-2">
            <ul>
                <li className="hamburger-menu"><i className="bi bi-list" />دسته بندی کالاها</li>
                <li><i className="bi bi-shop" />سوپر مارکت</li>
                <li><i className="bi bi-file-arrow-up" />پرفروش ترینها</li>
                <li><i className="bi bi-postcard" />تخفیفها و پیشنهادها</li>
                <li><i className="bi bi-percent"/>شگفت انگیزها </li>
                <li>سوالی دارید؟</li>
                <li>در دیجیکلا بفروشید!</li>
            </ul>

            <ul>
                <li><i className="bi bi-geo-alt"/>لطفا شهر خود را انتخاب کنید</li>
            </ul>
        </div>
     );
}
 
export default Menu;