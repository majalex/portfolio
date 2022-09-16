const Product = ({img,link}) => {
    return (
        <div className='product-box'>
            <div className='browser-element'>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={img} alt="" className='p-img'/>
            </a>


        </div>
    )
}

export default Product;