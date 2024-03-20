import Link from "next/link";

export default function Meals() {
    return <main>
        <h5>Main Meals page</h5>
        <p><Link href={'/meals/share'}>Shared Meal</Link></p>
    </main>
}