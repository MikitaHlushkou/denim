import React from 'react';
import Button from "../Button/Button";
let Filter = () => {
    function myFunction(e) {
        e.target.nextSibling.classList.toggle('show')

    }

    return (
        <div className={`filter`}>

            <button onClick={myFunction} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                <div onClick={myFunction} className="dropbtn">Price</div>
                <div id="drop" className="dropdown-content dropdown-content--secondary">
                    <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"/>
                </div>


                <div onClick={myFunction} className="dropbtn">Color</div>
                <div id="drop" className="dropdown-content dropdown-content--secondary">
                    <div className="colorContainer">
                        <div className="colorCircle colorCircle-lightGray "/>
                        <div className="colorCircle colorCircle-darkBlue"/>
                        <div className="colorCircle colorCircle-gray"/>
                        <div className="colorCircle colorCircle-black"/>
                        <div className="colorCircle colorCircle-white"/>
                        <div className="colorCircle colorCircle-blue"/>
                    </div>
                </div>


                <div onClick={myFunction} className="dropbtn">Collection</div>
                <div id="drop" className="dropdown-content dropdown-content--secondary">
                    <div className="collection">
                        <div className="collection-name">Casual</div>
                        <div className="collection-name">Petite</div>
                        <div className="collection-name">Classic</div>
                        <div className="collection-name">Soulluxe</div>
                    </div>


                </div>
                <div className="filter-btnContainer">
                    <Button additionalClass={`apply`} text={`Apply`}/>
                </div>
                <div className="filter-btnContainer">
                    <Button additionalClass={`clearAll`} text={`Clear all`}/>
                </div>

            </div>


        </div>

    )
}

export default Filter;