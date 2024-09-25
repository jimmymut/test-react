import Counter from "../components/Counter";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <div className="w-full h-screen bg-black text-white">
            <Layout>
            <h1>Hi</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, omnis eos ratione harum beatae quod ullam adipisci eum id doloremque facere dolorem, voluptates consequuntur, consequatur
                facilis! Libero illum nobis quas!</p>
                <Counter/>
        </Layout>
        </div>
    );
}