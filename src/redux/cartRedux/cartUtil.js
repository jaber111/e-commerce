export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const existingCartItem = cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem =>
        cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1}
        : cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quantity : 1 }]
};

export const totalPrice =(catItems)=>{
    let total = 0;
    // eslint-disable-next-line array-callback-return
    catItems.map((item)=>
        total += item.price*item.quantity
    );
    return total
};
export const totalItem =(cartItems)=> {
    let total = 0;
    if (cartItems) {
        cartItems.map((item) =>
            total += item.quantity
        );
    }
    return total
};

export const selectedCategorie=(cartItems,name)=>{
    const categorie = [];
    // eslint-disable-next-line array-callback-return
    cartItems.map((item)=>{
        if (item.title === name)
            categorie.concat(item)
    })
    return categorie;
};

export const deleteItemCart=(cartItems,itemToDelete)=>{
    let quantity =0;
    // eslint-disable-next-line array-callback-return
          cartItems.map((cartItem)=>{
        if(cartItem.id===itemToDelete.id)
            quantity = itemToDelete.quantity;
          });
        if(quantity!==1) {
            return cartItems.map(cartItem =>
                cartItem.id === itemToDelete.id ? {...cartItem, quantity: cartItem.quantity - 1}
                    : cartItem
            )
        } else{
            return cartItems.filter(item => item !== itemToDelete)
        }
    }
