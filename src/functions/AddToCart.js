import { useContext } from 'react';
import { toast } from 'react-toastify';

export const funcCart = (id, picture, name, color, size, price, sliced) => {
	let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
	let cartTotal = JSON.parse(localStorage.getItem('Total'));

	if (cartItems !== null) {
		// let data = {'product_id':id,'product_picture':picture, 'product_name':name, 'product_color':color, 'product_size':size, 'product_price':price, 'inCart':1}
		let names = [];
		for (let i = 0; i < cartItems.length; i++) {
			names.push(cartItems[i].product_name);
		}
		if (names.includes(name)) {
			// setCart(cartItems.length);
			toast.info('product already in cart');
			return '';
		} else {
			cartItems.push({
				product_id: id,
				product_picture: picture,
				product_name: name,
				product_color: color,
				product_size: size,
				product_price: sliced,
				inCart: 1
			});
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			localStorage.setItem('Total', parseInt(cartTotal) + parseInt(sliced));
			toast('product added to cart');
			return cartItems.length;
		}
	} else {
		cartItems = [
			{
				product_id: id,
				product_picture: picture,
				product_name: name,
				product_color: color,
				product_size: size,
				product_price: sliced,
				inCart: 1
			}
		];
		localStorage.setItem('Total', sliced);
		localStorage.setItem('productsInCart', JSON.stringify(cartItems));
		toast('product added to cart');
		// setCart(cartItems.length);
		return cartItems.length;
	}
	// console.log('cartproduct',cartItems);
};
