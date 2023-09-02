import Link from "next/link";
import Head from 'next/head';

export default function Index(){
    return(
        
        <div>
            <Head>
                <title>Лестницы из металла. Лестницы на второй этаж. Производство.</title>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content={"Производство металлических лестниц в Москвовской области"} />
            </Head>
        <h1>Лестницы из металла. Лестницы на второй этаж. Производство.</h1>
        <p><Link href={'/contacts'}>Контакты</Link></p>
        </div>
    )
}
