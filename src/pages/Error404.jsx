import Button from "../ui/Button";
import Overlay from "../ui/Layout/Overlay";

function Error404() {
  return (
    <>
      <Overlay />
      <div className="grid min-h-screen grid-cols-1 content-center justify-items-center bg-[url('/background/404bg.png')] bg-cover bg-center">
        <h1 className="font-serif text-9xl">404</h1>
        <h2 className="my-10 px-4 text-center font-serif text-3xl">
          Page not found. Wanna head back?
        </h2>
        <Button>Go Back</Button>
      </div>
    </>
  );
}

export default Error404;
