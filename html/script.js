const cars = [
    {
        name: "Toyota Camry",
        year: 2024,
        country: "Yaponiya",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
    },
    {
        name: "BMW M5",
        year: 2024,
        country: "Germaniya",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },
    {
        name: "Mercedes-Benz C-Class",
        year: 2024,
        country: "Germaniya",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
    },
    {
        name: "Audi A6",
        year: 2024,
        country: "Germaniya",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
    },
    {
        name: "Tesla Model 3",
        year: 2024,
        country: "AQSH",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89"
    },
    {
        name: "Hyundai Sonata",
        year: 2024,
        country: "Janubiy Koreya",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    },
    {
        name: "Kia K5",
        year: 2024,
        country: "Janubiy Koreya",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
    },
    {
        name: "Lexus ES",
        year: 2024,
        country: "Yaponiya",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753"
    },
    {
        name: "Chevrolet Malibu",
        year: 2024,
        country: "AQSH",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
    },
    {
        name: "Ford Mustang",
        year: 2024,
        country: "AQSH",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd"
    },
    {
        name: "Nissan GT-R",
        year: 2024,
        country: "Yaponiya",
        image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b"
    },
    {
        name: "Honda Civic",
        year: 2024,
        country: "Yaponiya",
        image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b"
    },
    {
        name: "Porsche 911",
        year: 2024,
        country: "Germaniya",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
        name: "Range Rover",
        year: 2024,
        country: "Buyuk Britaniya",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
    },
    {
        name: "Chevrolet Camaro",
        year: 2024,
        country: "AQSH",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
    }
];

const container = document.getElementById("cars");

cars.forEach(car => {
    container.innerHTML += `
        <div class="car">
            <img src="${car.image}" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>Yili: ${car.year}</p>
            <p>Mamlakat: ${car.country}</p>
        </div>
    `;
});