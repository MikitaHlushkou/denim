import React from 'react';
import Button from '../Button/Button';
import Logo from '../../assets/images/matheus-Header.png';
import CollectionList from './CollectionList';
import HeaderIcons from './HeaderIcons';
import CollectionListStyles from './styles.module.scss';
import mainPageStyles from './styles.module.scss';


let HeaderPromotion = () => {
    return (
        <div className='grid-container'>
            <div className="grid-item">
                <CollectionList style={CollectionListStyles}/>
                <div className="arrowDownIcon"><a href="">
                    <svg width="12" height="29" viewBox="0 0 12 29" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0V17V27M6 27L11 21M6 27L1 21" stroke="#151C22" strokeWidth="2"/>
                    </svg>
                </a></div>


            </div>
            <div className="grid-item">
                <p>The quality you deserve</p>
                <h2 className={`headerPromotionHeadline`}>denim</h2>
                <Button text={`Check new collection`}/>
            </div>
            <div className="grid-item"><img src={Logo} width={`413px`} height={`517px`} alt=""/></div>

            <div className="grid-item">
              <HeaderIcons style={mainPageStyles} />
                <div className="socialNetworks">
                    <ul className="socialNetworks-list">


                        <li className="socialNetworks-item">Facebook</li>
                        <li className="socialNetworks-item">Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HeaderPromotion;