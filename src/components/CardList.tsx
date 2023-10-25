import Card from "./Card";


const listaCidades = [
    {
        cityInfo: {
            city: 'Rio de Janeiro',
            country: 'Brasil',
            imageUrl: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg',
            visited: true
        }
    },
    {
        cityInfo: {
            city: 'Cidade do Cabo',
            country: 'África do Sul',
            imageUrl: 'https://africadosulbrasil.com.br/wp-content/uploads/sites/10/2022/02/cape-town-3.jpg',
            visited: true,
        }
    },
    {
        cityInfo: {
            city: 'Acapulco',
            country: 'México',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYC2YqLTL7Abruz6e_-1k7BOhY-HkNkEuIw&usqp=CAU',
        }
    }
]

function CardList() {
    return (
        <div className="car-list">
            {listaCidades.map((elemento) => {
                return <Card cityInfo={elemento.cityInfo} />
            })}
        </div>
    )
}

export default CardList;