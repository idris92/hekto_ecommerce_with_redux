import React, {useState, useEffect, useContext} from 'react';
import { userContext } from '../context/UserContext';
function CartProduct({idx,product, name, picture, color, size, amount, inCart}) {
    const {glocalInCart, setglocalInCart}= useContext(userContext);
    const {glocalPrice, setglocalPrice}= useContext(userContext);
    const {cartTotal, setCartTotal}= useContext(userContext);
    const {cart, setCart}= useContext(userContext);
    // let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    // let products = cartItems[product];
    const [productInCart, setProductInCart]=useState(inCart);
    const [price, setPrice] = useState(0);
    const [total, setTotal]= useState(0);
    const [productPrice, setProductPrice]=useState(0)
    let localTotal = JSON.parse(localStorage.getItem('Total'));
   

    useEffect(() => {
    //    setglocalInCart(productInCart)
    //    setglocalPrice(amount)
       setProductPrice(amount * inCart)
       setPrice(amount)
    //    updateTotal()
    }, [])
    
    // const updateTotal=()=>{
    //     let item = JSON.parse(localStorage.getItem('productsInCart'));
    //     let itemTotal = JSON.parse(localStorage.getItem('Total'));
    //     if (item){
    //         if (itemTotal){
    //             let precentProduct = item[idx];
    //             let precentTotal =  precentProduct.product_price * precentProduct.inCart
    //             console.log( precentTotal);
    //         }else{
    //             let precentProduct = item[idx];
    //             let precentTotal =  precentProduct.product_price * precentProduct.inCart
    //             localStorage.setItem("Total", JSON.stringify(precentTotal));
    //         }
    //     // console.log('updateTotal',precentTotal );
    //     }
        
    // }
    

    const handleIncrement=()=>{
        let item = JSON.parse(localStorage.getItem('productsInCart'));
        let itemTotal = JSON.parse(localStorage.getItem('Total'));
        product.inCart += 1;
        setProductInCart(productInCart+1);
        setProductPrice(amount * product.inCart);
        item[idx].inCart= product.inCart
        localStorage.setItem("productsInCart", JSON.stringify(item));
        localStorage.setItem('Total',parseInt(itemTotal) + parseInt(amount) );
        setCartTotal(parseInt(itemTotal) + parseInt(amount));
        // updateTotal()
        
    }

    const handleDecrement=()=>{
        let item = JSON.parse(localStorage.getItem('productsInCart'));
        let itemTotal = JSON.parse(localStorage.getItem('Total'));
        if (product.inCart === 1){
            alert('Quantity cannot be less than 1')
        }else{
            product.inCart -= 1;
            setProductInCart(productInCart-1);
            setProductPrice(amount * product.inCart);
            item[idx].inCart= product.inCart
            localStorage.setItem("productsInCart", JSON.stringify(item));
            localStorage.setItem('Total',parseInt(itemTotal) - parseInt(amount));
            setCartTotal(parseInt(itemTotal) - parseInt(amount));
        }
        
     
        
    }

    const removeItem=()=>{
        let item = JSON.parse(localStorage.getItem('productsInCart'));
        let itemTotal = JSON.parse(localStorage.getItem('Total'));
        item.splice(idx, 1);
        // console.log("splice item", item);
        // console.log("idx", idx);
        localStorage.setItem("productsInCart", JSON.stringify(item));
        localStorage.setItem('Total',parseInt(itemTotal) - parseInt(productPrice));
        setCartTotal(parseInt(itemTotal) - parseInt(amount));
        setCart(cart-1);
        if (cart === 1){
            localStorage.removeItem("productsInCart");
            localStorage.removeItem("Total");

        }
    }
    // console.log(cart);
   
    // console.log(total);
    return (
        <tr>
            <td scope="row">
                <div style={{display:'flex'}}>
                    <div style={{width:'83px', height:'87px', position:'relative'}}>
                        <img src={`http://127.0.0.1:8000/images/${picture}`} style={{width:'83px', height:'87px'}} alt='product'/>
                        <p style={{margin:0, cursor:'pointer',backgroundColor:'black', zIndex:8, color:'#fff', position:'absolute', top:-5,right:-5, textAlign:'center', borderRadius:'50%', width:'21px' ,height:'21px'}} onClick={removeItem}>X</p>
                    </div>
                    <div style={{marginLeft: '17px', paddingTop:'17px'}}>
                        <p style={{marginBottom:'0px', fontFamily:'Josefin Sans', color: '#000'}}>{name}</p>
                        <p style={{marginBottom:'0px', color: '#A1A8C1', fontFamily:'Josefin Sans', fontSize:'12px'}}>Color: <span>{color}</span></p>
                        <p style={{marginBottom:'0px' , color: '#A1A8C1', fontFamily:'Josefin Sans', fontSize:'12px'}}>Size: <span>{size}</span></p>
                    </div>
                </div>
            </td>
            <td style={{paddingLeft:'8px', fontFamily:'Josefin Sans', paddingTop:'32px'}}>${price}</td>
            <td style={{ fontFamily:'Josefin Sans', paddingTop:'32px'}}>
                <button style={{border:'none'}} onClick={handleDecrement}>-</button>
                <input type='text' value={productInCart} style={{width:'32px', border:0, textAlign:'center'}}/>
                <button  style={{border:'none'}} onClick={handleIncrement}>+</button>
            </td>
            <td style={{ fontFamily:'Josefin Sans', paddingTop:'32px'}}>${productPrice}</td>
        </tr>
    )
}

export default CartProduct
