import React from 'react';

let HeaderIcons =()=>{
    return(
        <div className="headerIcons">
            <a className={`headerIcons-link`} href="#">
                <svg className={` searchIcon`} width="22" height="20" viewBox="0 0 22 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 1H4.63636L7.07273 12.4771C7.15586 12.8718 7.38355 13.2263 7.71595 13.4785C8.04835 13.7308 8.46427 13.8649 8.89091 13.8571H17.7273C18.1539 13.8649 18.5698 13.7308 18.9022 13.4785C19.2346 13.2263 19.4623 12.8718 19.5455 12.4771L21 5.28571H5.54545M9.18182 18.1429C9.18182 18.6162 8.7748 19 8.27273 19C7.77065 19 7.36364 18.6162 7.36364 18.1429C7.36364 17.6695 7.77065 17.2857 8.27273 17.2857C8.7748 17.2857 9.18182 17.6695 9.18182 18.1429ZM19.1818 18.1429C19.1818 18.6162 18.7748 19 18.2727 19C17.7707 19 17.3636 18.6162 17.3636 18.1429C17.3636 17.6695 17.7707 17.2857 18.2727 17.2857C18.7748 17.2857 19.1818 17.6695 19.1818 18.1429Z"
                        stroke="#151C22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <a className={`headerIcons-link`} href="#">
                <svg className={` basketIcon`} width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                        stroke="#151C22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>

        </div>
    )
}
export default HeaderIcons;