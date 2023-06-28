const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        if (pedido == 'pizza') {
            reject(`Não temos seu pedido [${pedido}]`);
        }

        setTimeout(() => {
            resolve(`Chegou seu pedido [${pedido}]`);
        }, 5000);
    });
};



const reservarPedido = async () => {
    try{
        console.log( await pedido("arroz"))
        console.log( await pedido("carne"))
        console.log( await pedido("pizza"))
    }
    catch(err){
        console.log(err)

    }
}