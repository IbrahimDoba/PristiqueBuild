import Link from "next/link";

export default function Notfound():any {
  return (
    <main className="text-center">
      <h2 className="text-3xl" > There was a Problem</h2>
      <p>We could not find the page you were looking for!</p>
      <p >Go back to the dashboard<Link className="m-4" href="/">Home</Link></p>
    </main>
  )
}
