export const apiEndpoints = {
  baseUrl: 'https://localhost:7115/api/',
  admins: {
    checkReport: (id: number) => `Admins/CheckReport/${id}`,
    actionReport: 'Admins/ActionReport',
    suspendProduct: 'Admins/SuspendProduct',
    unSuspendedProduct: (id: number) => `Admins/UnSuspendedProduct/${id}`,
    suspendVendor: 'Admins/SuspendVendor',
    unSuspendedVendor: (id: number) => `Admins/UnSuspendedVendor/${id}`,
  },
  auth: {
    customerRegister: 'Auth/CustRegister',
    vendorRegister: 'Auth/VendorRegister',
    adminLogin: 'Auth/AdminLogin',
    login: 'Auth/Login',
    modifyPhoto: 'Auth/ModifyPhoto',
    deletePhoto: 'Auth/DeletePhoto',
  },
  carts: {
    getCustomerCart :(pNum :number,pSize :number) => `Carts/GetCustomerCart?PageNumber=${pNum}&PageSize=${pSize}`,
    getOrderSummary: 'Carts/GetOrderSummary',
    payment: 'Carts/Payment',
    // incrementQuantity: (id: number) => `Carts/IncrementQuantity/${id}`,
    // decrementQuantity: (id: number) => `Carts/DecrementQuantity${id}`,
    incrementQuantity:  `Carts/IncrementQuantity`,
    decrementQuantity: `Carts/DecrementQuantity`,
    removeFromCart: (id: number) => `Carts/RemoveFromCart?productId=${id}`,
    cancelOrder: (id: number) => `Carts/CancelOrder/${id}`,
    testPay: 'Carts/testPay',
  },
  customers: {
    rateProduct: 'Customers/RateProduct',
    addToWishList: 'Customers/addToWishList',
    deleteFromWishList: 'Customers/DeleteFromWishList',
    askQuestion: 'Customers/AskQuestion',
    addToCart: 'Customers/addToCart',
    reportProduct: 'Customers/ReportProduct',
    viewCustomerProfile: 'Customers/ViewCustomerProfile',
    editCustomerProfile: 'Customers/EditCustomerProfile',
    viewVendorProfile: 'Customers/ViewVendorProfile',
    editVendorProfile: 'Customers/EditVendorProfile',
  },
  productsActions: {
    productsActions: (threshold: string) =>
      `ProductsActions/NeedToPunch/${threshold}`,
  },
  products: {
    getProductsPage: 'Products/GetProductspage',
    getProductReviews: (id: number) => `Products/GetProductReviews/?id=${id}`,
    getProductDetails: (id: number) => `Products/GetProductDetails/?id=${id}`,
    getSuspendedProducts: 'Products/GetSuspendedProducts',
  },
  productsReports: {
    getAllReports: 'ProductsReports/GetAllReports',
    getUncheckedReports: 'ProductsReports/GetUncheckedReports',
  },
  superAdmin: {
    createAdmin: 'SuperAdmin/CreateAdmin',
    testSuperAdmin: 'SuperAdmin/TestSUperAdmin',
  },
  vendor: {
    getAllQuestions: 'Vendors/GetAllQuestions',
    answerQuestion: 'Vendors/AnswearQuestion',
    addProduct: 'Vendors/AddProduct',
    getSuspendedVendor: 'Vendors/GetSuspendedVendor',
    getPendingOrders: 'Vendors/GetPendingOrders',
    confirmPendingOrders: (orderId: number, productId: number) =>
      `Vendors/ConfirmtPendingOrders/${orderId}/${productId}`,
    viewOwnProducts: 'Vendors/ViewOwnProducts',
  },
  wishesLists: {
    getCustomerWishList: 'WishesLists/GetCustomerWishList',
  },
};
