export const RoutePaths = {
    overview:{
        path:'/dashboard/overview',
        children:{
            productAvailability : {path:'/dashboard/overview/Product Availability'},
            priceChange:{path:'/dashboard/overview/Price Change'}
        }
    },
    analysis:{
        path:'/dashboard/analysis'
    }
}