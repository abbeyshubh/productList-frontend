//Local
export const apiUrl = "http://localhost:8000/api/post/";
//Live
// export const apiUrl = "https://shoppingcrt-backend.herokuapp.com/api/post/";
export const addToCart = (item) => {
  let qty = 0;
  let sessionItem = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
  if (sessionItem.length > 0) {
    let fIndex = sessionItem.findIndex((a) => a._id === item._id);
    let findObj = sessionItem.find((a) => a._id === item._id);
    if (findObj && fIndex !== -1) {
      findObj.quantity = parseInt(findObj.quantity) + 1;
      findObj.totalPrice = parseInt(findObj.price) * findObj.quantity;
      sessionItem.splice(fIndex, 1, findObj);
    } else {
      let sessionData = {};
      sessionData = { ...item, quantity: 1, totalPrice: item.price };
      sessionItem.push(sessionData);
    }
  } else {
    let sessionData = {};
    sessionData = { ...item, quantity: 1, totalPrice: item.price };
    sessionItem.push(sessionData);
  }
  sessionItem.map((item, index) => {
    qty += item.quantity;
  });
  localStorage.setItem("cartItem", JSON.stringify(sessionItem));
  return qty;
};

export const getCartCount = () => {
  let qty = 0;
  let sessionItem = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
  sessionItem.map((item, index) => {
    qty += item.quantity;
  });
  return qty;
};
