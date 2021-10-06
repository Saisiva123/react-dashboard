export const RoutePaths = {
    overview:{
        path:'/overview',
        children:{
            productAvailability : {path:'/overview/product-availability'},
            priceChange:{path:'/overview/price-change'}
        }
        
    }
}