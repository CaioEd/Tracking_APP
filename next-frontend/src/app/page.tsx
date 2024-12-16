import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex flex-col itens-center justify-center items-center flex-col text-white m-auto">
          <Link href="/new-route">
            <button> Criar Nova rota</button>
          </Link>

          <Link href="/driver">
            <button>Iniciar uma rota</button>
          </Link>

          <Link href="/admin">
            <button>Admin</button>
          </Link>
        </div>

      </main>
    </>
  );
}
