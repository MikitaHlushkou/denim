import React from "react";
import HeaderCatalogPage from "../Components/Header/HeaderCatalogPage";
import Category from "../Components/Category/Category";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item4.png";
import prod1 from '../assets/images/prodcard1.png';
import prod2 from '../assets/images/prodcard2.png';
import prod3 from '../assets/images/prodcard3.png';
import prod4 from '../assets/images/prodcard4.png';
import prod5 from '../assets/images/prodcard5.png';
import Footer from "../Components/Footer/Footer";
import ProductGallery from "../Components/Item/ProductGallery";
import FullProductInfo from "../Components/Item/FullProductInfo";

const itemArray = [{src: item1, type: 'Jacket', price: 120}, {src: item2, type: 'Overalls', price: 140}, {
    src: item3,
    type: 'Jacket',
    price: 90
}, {src: item4, type: 'Overalls', price: 160}];
const pict = [{id: '1', images: [prod1, prod2, prod3, prod4, prod5]}, {
    id: '2',
    images: [prod5, prod4, prod3, prod2, prod1]
}]

class ProductCard extends React.Component {
    state = {
        index: 0,
        picList: [],
    }
    Switch = (direction) => {
        if (direction === 'right') {

            let arr = [...this.state.picList];
            let prev = arr.shift();
            arr.push(prev);
            this.setState({
                picList: arr
            })
        } else if (direction === 'left') {
            let arr = [...this.state.picList];
            let prev = arr.pop();
            arr.unshift(prev);
            this.setState({
                picList: arr
            })
        }
    }

    id = this.props.match.params.id;
    filtered = pict.filter(el => el.id === this.id)[0];

    componentWillMount() {

        this.setState({
            picList: this.filtered.images
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <HeaderCatalogPage/>
                <main>
                    <section className="productCard">
                        <div onClick={() => this.Switch('left')} className="arrow arrow-left"></div>
                        <ProductGallery id={this.id} filter={this.filtered.images} state={this.state}/>
                        <div onClick={() => this.Switch('right')} className="arrow arrow-right"></div>
                        <FullProductInfo/>
                    </section>
                    <Category items={itemArray} headline={`You may also like`}/>
                </main>
                <Footer additionalClass={`productPage`}/>
            </div>
        )
    }
}

export default ProductCard;