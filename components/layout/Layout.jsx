import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      id="app"
      className="flex min-h-screen flex-col items-center bg-neutral-100 text-neutral-900 decoration-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
    >
      <Header />

      <main className="flex min-h-full w-full max-w-full grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
