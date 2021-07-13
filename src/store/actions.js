export default {
    addCart(context, product) {
        return new Promise((resolve,reject)=>{
            let oldProduct = null
            // state.carlist.push(product)
            for (const items of context.state.carlist) {
                if (items.iid == product.iid) {
                    oldProduct = items
                }
            }
            if (oldProduct) {
                context.commit('addcounter',oldProduct)
                resolve('addcount')
            } else {
                context.commit('addtocar',product)
                resolve('addcar')
            }
        })
}}