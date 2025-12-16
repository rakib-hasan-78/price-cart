const getLS =(itemName)=>{
    const LS = localStorage.getItem(itemName);
    return LS? JSON.parse(LS) : [];
}
// storage set =>

const setStorage = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
}

// increment storage handler ===>

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

// decrement storage handler ==> 

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

// remove items ===>

const removeLS =(itemName, product) => {
  const LS = getLS(itemName);
  const removeItem = LS.filter(id=>id.product_id!==product.product_id);
  setStorage(itemName, removeItem);
}

// clear all save data ==>

const clearLS = itemName =>{
  localStorage.removeItem(itemName);
}

// wishList Product HandlerLS ==>
const wishLS = (itemName, product)=>{
  const LS = getLS(itemName);
  const updatedData = LS.find(item=> item.product_id === product.product_id);

  if (!updatedData) {
    LS.push({product_id:product.product_id})
  }
  setStorage(itemName, updatedData);
}

export {getLS,incrementLS, decrementLS, removeLS, clearLS, wishLS};