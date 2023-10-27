import Link from 'next/link';
import Cadastro from './cadastro';

const Home = () => {
    return (
        <>
                <Link href="/cadastro">Cadastro</Link>
            <h1>Welcome to my website!</h1>
            <p>Here you can find all sorts of information about me and my work.</p>
        </>
    );
};

export default Home;
