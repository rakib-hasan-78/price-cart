const getLS =(itemName)=>{
    const LS = localStorage.getItem(itemName);
    return LS? JSON.parse(LS) : [];
}
// storage set =>
const setStorage = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
}

const incrementLS = (itemName, product)=>{
    const LS = getLS(itemName);
    const found = LS.find(item=>item.product_id === product.product_id);

    if (!found) {
        LS.push({product_id: product.product_id , quantity: 1})
    } else {
        found.quantity++
    }
    setStorage(found);
}

const decrementLS =(itemName, product) => {
  const LS = getLS(itemName);
  const decrementItem = LS.map(item=>{
    const found = item.find(item=>item.product_id===product.product_id);
    if (found.quantity >1) {
        return {...item, quantity: item.quantity-1}
    } else{
        return null;
    }
    
  }).filter(Boolean);
  setStorage(itemName, decrementItem);
}




export {getLS,incrementLS, decrementLS}