import Link from "next/link";

export default function Header() {
    return (
        <header style={{backgroundColor:"lightgray"}}>
            <Link href="/">Home</Link>
            <Link  href="/products">전체상품</Link>
        </header>
    )
}