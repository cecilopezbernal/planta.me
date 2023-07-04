const products = [
    { id: 1, nombre: "Calathea Orbifolia", text: `Una exótica Calathea`, precio: 35.10 , img: "./img/calathea.jpg" },
    { id: 2, nombre: "Cítrico Calamondín", text: `Un árbol para tu hogar`, precio: 74.00 , img: "./img/citricos-calamondin.jpg" },
    { id: 3, nombre: "Euforbia Ingens", text: `Resistente y purificante`, precio: 92.40, img: "./img/euforbia-ingens.jpg" },
    { id: 4, nombre: "Monstera Deliciosa", text: `Se adapta a cualquier tipo de interior`, precio: 54.00, img: "./img/monstera.jpg" },
    { id: 5, nombre: "Pachira", text: `Purificante y resistente`, precio: 87.80, img: "./img/pachira.jpg" },
    { id: 6, nombre: "Palma Areca", text: `Tropicales y resistentes`, precio: 78.00, img: "./img/palma-areca.jpg" },
    { id: 7, nombre: "Potos", text: `Fuerte y hermosa`, precio: 63, img: "./img/potos.jpg" },
    { id: 8, nombre: "Jardinera de Dubái", text: `Cerámica con acabado brillante`, precio: 17.00, img: "./img/jardinera-de-dubai.jpg" },
    { id: 9, nombre: "Maceta Estocolmo", text: `Una jardinera 100% reciclable`, precio: 13.50, img: "./img/maceta-estocolmo.jpg" },
    { id: 10, nombre: "Maceta Lima", text: `ECO con drenaje`, precio: 30.80, img: "./img/maceta-lima.jpg" },
    { id: 11, nombre: "Maceta Venecia", text: `Cerámica texturizada`, precio: 13.00, img: "./img/maceta-venecia.jpg" },
    { id: 12, nombre: "Macetero Cache Nauru", text: `Yute con revestimiento de plástico`, precio: 38.00, img: "./img/macetero-cache-nauru.jpg" }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}
