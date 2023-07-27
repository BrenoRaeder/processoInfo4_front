import { useUser } from '../../contexts/UserContext';

function Home() {

    const { user } = useUser(); 

    return (
        <div>
            {
                user === undefined ? <></> 
                :
                user.listaLivros.map((l) => {
                    return (
                        <div>{l.nomeLivro}</div>
                    )
                })
            } 
        </div>
    )
}

export default Home;