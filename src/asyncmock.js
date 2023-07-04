const products = [
    { id: "1", nombre: "Calathea Orbifolia", text: `Una exótica Calathea`, precio: 35.10 , img: "./img/calathea.jpg", idCat: 2 },
    { id: "2", nombre: "Cítrico Calamondín", text: `Un árbol para tu hogar`, precio: 74.00 , img: "./img/citricos-calamondin.jpg", idCat: 2 },
    { id: "3", nombre: "Euforbia Ingens", text: `Resistente y purificante`, precio: 92.40, img: "./img/euforbia-ingens.jpg", idCat: 2 },
    { id: "4", nombre: "Monstera Deliciosa", text: `Se adapta a cualquier tipo de interior`, precio: 54.00, img: "./img/monstera.jpg", idCat: 2 },
    { id: "5", nombre: "Pachira", text: `Purificante y resistente`, precio: 87.80, img: "./img/pachira.jpg", idCat: 2 },
    { id: "6", nombre: "Palma Areca", text: `Tropicales y resistentes`, precio: 78.00, img: "./img/palma-areca.jpg", idCat: 2 },
    { id: "7", nombre: "Potos", text: `Fuerte y hermosa`, precio: 63, img: "./img/potos.jpg", idCat: 2 },
    { id: "8", nombre: "Jardinera de Dubái", text: `Cerámica con acabado brillante`, precio: 17.00, img: "./img/jardinera-de-dubai.jpg", idCat: 3 },
    { id: "9", nombre: "Maceta Estocolmo", text: `Una jardinera 100% reciclable`, precio: 13.50, img: "./img/maceta-estocolmo.jpg", idCat: 3 },
    { id: "10", nombre: "Maceta Lima", text: `ECO con drenaje`, precio: 30.80, img: "./img/maceta-lima.jpg", idCat: 3 },
    { id: "11", nombre: "Maceta Venecia", text: `Cerámica texturizada`, precio: 13.00, img: "./img/maceta-venecia.jpg", idCat: 3 },
    { id: "12", nombre: "Macetero Cache Nauru", text: `Yute con revestimiento de plástico`, precio: 38.00, img: "./img/macetero-cache-nauru.jpg", idCat: 3 }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            const producto = products.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productoCategoria = products.filter(prod => prod.idCat === idCategory);
            resolve(productoCategoria);
        }, 2000)

    })
}