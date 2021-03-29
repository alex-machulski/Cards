import React from "react";
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.number}>404</div>
            <div className={s.message}>Page not found!</div>
            <div className={s.cat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
