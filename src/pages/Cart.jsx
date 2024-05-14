import React from "react";

export function Cart({ cart, setCart }) {
	// Add setCart as a prop
	function handleClick(item) {
		// Filter out the item being removed from the cart
		const updatedCart = cart.filter((product) => product.title !== item.title);
		// Update the cart state
		setCart(updatedCart);
	}

	// function handleCheckout()

	return (
		<div>
			{cart.map((item, index) => (
				<div key={index}>
					<h2>{item.title}</h2>
					<p>{item.desc}</p>
					<button onClick={() => handleClick(item)}>Remove Item</button>
				</div>
			))}

			{/* <button>Checkout</button> */}
		</div>
	);
}