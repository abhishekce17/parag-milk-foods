import React, { useEffect, useState } from 'react'
import products from "../productData.json"
import subscription from "../subscription.json"
const Summary = () => {
    const [productList, setProductList] = useState(products);
    const [selecTedPackages, setSelectedPAckages] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleIncrement = (id) => {
        const updatedList = productList.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 }
            }
            return product;
        })
        setProductList(updatedList);
    }
    const handleDecrement = (id) => {
        const updatedList = productList.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 }
            }
            return product;
        })
        setProductList(updatedList);

    }
    const removeItem = (id) => {
        const updatedList = productList.filter(product => product.id !== id)
        setProductList(updatedList);
    }

    const handlePackage = (pckg) => {
        const index = selecTedPackages.indexOf(pckg);
        const updatedList = index !== -1
            ? [...selecTedPackages.slice(0, index), ...selecTedPackages.slice(index + 1)]
            : [...selecTedPackages, pckg];
        setSelectedPAckages(updatedList);
    }

    useEffect(() => {
        const calculateTotalPrice = () => {
            const productsTotal = productList.reduce((acc, product) => acc + product.price * product.quantity, 0);
            const packagesTotal = selecTedPackages.reduce((acc, pckg) => acc + pckg.price, 0);
            console.log(productsTotal + packagesTotal)
            setTotalPrice(productsTotal + packagesTotal);
        };
        calculateTotalPrice();
    }, [productList, selecTedPackages]);

    return (
        <div className="summary" >
            <p style={{ fontSize: "1.2rem", margin: "10px 0", borderBottom: "1px solid gray", padding: "5px" }} >Product Summary</p>
            <ul className="list" >
                {
                    productList.map((product, index) => {
                        return (
                            <li key={index} className="items" >
                                <img src={product.src} />
                                <div>
                                    <p>{product.name}</p>
                                    <p>₹ {product.price}</p>
                                    <div>
                                        <button onClick={e => product.quantity > 1 && handleDecrement(product.id)} >-</button>
                                        <p>{product.quantity}</p>
                                        <button onClick={e => product.quantity < 10 && handleIncrement(product.id)} >+</button>
                                    </div>
                                </div>
                                <button onClick={e => removeItem(product.id)} >
                                    <div className='cross' ></div>
                                </button>
                            </li>)
                    })
                }
            </ul>
            <p style={{ fontSize: "1.2rem", margin: "10px 0", borderBottom: "1px solid gray", padding: "5px" }} >Add On Subscriptions</p>
            <ul className="list" >
                {subscription.map((pckg, index) => {
                    return (
                        <li key={index} className="items" >
                            <div className="package" >{pckg.type}</div>
                            <div>
                                <p>{pckg.name}</p>
                                <p>Milk : {pckg.products_included.milk}</p>
                                <p>Paneer : {pckg.products_included.paneer}</p>
                                <p>₹ {pckg.price}</p>
                            </div>
                            <div>
                                <input name='packages' onClick={e => handlePackage(pckg)} value={selecTedPackages.includes(pckg.type)} type="checkbox" />
                            </div>
                        </li>)
                })}
            </ul>
            <div className='figures'>
                <span>Total : </span> <span>{totalPrice}</span>
            </div>
        </div>
    )
}

export default Summary