import Link from "next/link";

export default function Index(){
    return(
        <div>
        <h1>Hi Vovan! How are you?</h1>
        <p>Проверка русского языка внутри React</p>
        <p><Link href={"/works"} title={'Works'}>Works</Link></p>
        </div>
    )
}
