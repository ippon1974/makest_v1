import Link from "next/link";
import Head from 'next/head';

export default function Contacts(){
    return (
    <div>
        <Head>
            <title>Контакты</title>
            <meta name="viewport" content="width=device-width"/>
            <meta name="description" content={""} />
        </Head>
    <h1>Контакты</h1>
    <p>Телефон: + 7 (925) 585-33-71</p>
    <p>Пн-Пт с 9:00 до 19:00 </p>
    <p>Расположение производства: Посёлок ВУГИ, 1с4, Люберцы, Московская область, 140004. Территория института «ННЦ ГП - ИГД им. А.А. Скочинского»</p>
    <p><Link href={'/'} title={'На главную'}>На главную</Link></p>
    </div>
    )
}