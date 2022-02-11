const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'Heading1',
                heading2: 'Heading2',
                heading3: 'Heading3',
                headingtext1: 'This area is sample text 1',
                headingtext2: 'This area is sample text 2',
                headingtext3: 'This area is sample text 3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'Heading1',
                heading2: 'Heading2',
                heading3: 'Heading3',
                headingtext1: 'This area is sample text 1',
                headingtext2: 'This area is sample text 2',
                headingtext3: 'This area is sample text 3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'A normal phone with one of the best cameras',
                heading1: 'Heading1',
                heading2: 'Heading2',
                heading3: 'Heading3',
                headingtext1: 'This area is sample text 1',
                headingtext2: 'This area is sample text 2',
                headingtext3: 'This area is sample text 3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Pro',
                price: 1000,
                description: 'A Profesional phone with one of the marberas screens',
                heading1: 'Heading1',
                heading2: 'Heading2',
                heading3: 'Heading3',
                headingtext1: 'This area is sample text 1',
                headingtext2: 'This area is sample text 2',
                headingtext3: 'This area is sample text 3'
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

}

module.exports = FakeDb
