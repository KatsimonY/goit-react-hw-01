import css from "./Profile.module.css";
import { HiCheckBadge } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import { HiMiniEye } from "react-icons/hi2";
import { HiMiniHandThumbUp } from "react-icons/hi2";

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={image}
                    alt={name}
                    width="200"
                className={css.avatar}
                />
                <p className={css.name}>{name} <HiCheckBadge className={css.icon} fill="cornflowerblue"/></p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}><HiMapPin /> {location}</p>
            </div>


            <ul className={css.stats}>
                <li className={css.statsItem}>
                <span className={css.label}><HiMiniUsers /> Followers</span>
                <span className={css.value}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                <span className={css.label}><HiMiniEye /> Views</span>
                <span className={css.value}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                <span className={css.label}><HiMiniHandThumbUp /> Likes</span>
                <span className={css.value}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}