import Link from "next/link";

function Index() {
  return (
    <div className="mx-auto flex flex-col p-4">
      <div className="mb-6">
        <h1 className="my-2 text-4xl font-bold">Hello, World!</h1>
        <p>
          Reproduce Netlify runtime v5 issue with pages router and
          getServerSideProps() would result in:{" "}
          <i>
            Application error: a client-side exception has occurred (see the
            browser console for more information)
          </i>
        </p>
      </div>
      <Link href="/profile" className="block">
        Go to profile page
      </Link>
    </div>
  );
}

export default Index;
