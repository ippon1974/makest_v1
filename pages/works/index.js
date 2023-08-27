import Link from "next/link";

export default function Worsks(){
    return(
        <div>
            <h1>It's page about works</h1>
            <p><Link href={"/"} title={'Index'}>Index</Link></p>
        </div>
    );
}