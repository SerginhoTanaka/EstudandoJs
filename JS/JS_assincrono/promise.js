const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        if (pedido === 'pizza') {
            reject(`Não temos seu pedido [${pedido}]`);
        }

        setTimeout(() => {
            resolve(`Chegou seu pedido [${pedido}]`);
        }, 5000);
    });
};

pedido("arroz").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
}).finally(()=>{
    console.log("deu bom o processo do pedido")
})
