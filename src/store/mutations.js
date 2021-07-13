export default {
    addcounter(state,oldProduct){
        oldProduct.count ++
    },
    addtocar(state,product){
        product.count = 1
        product.checked = true
        state.carlist.push(product)
    },
    selectall(state){
        state.carlist.forEach(item => {
            item.checked = true
        });
    },
    noselectall(state){
        state.carlist.forEach(item => {
            item.checked = false
        });
    }
}
