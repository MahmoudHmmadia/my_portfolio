import Container from "./Container";

export default function Loader() {
  return (
    <div className="fixed w-full h-full bg-gradient_dark opacity-95 flex flex-col gap-4 justify-center items-center z-50 top-0 left-0">
      <div className="loaderr relative rounded-full w-[40px] aspect-square bg-cool_gradient m-auto">
        <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
        <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
        <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
        <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
      </div>
    </div>
  );
}
