import Button from "@/components/Button";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import PageTransition from "@/components/PageTransition";
import { aboutInfo } from "@/data/data";
import { TbArrowBack, TbSquaresDiagonal } from "react-icons/tb";
function INFO() {
  return (
    <PageTransition>
      <Container>
        <main className="flex flex-col gap-4">
          <PageTitle content="about me" />
          <div className="gap-6 flex items-center w-full justify-center flex-wrap ">
            {aboutInfo.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-4 flex-col p-4 self-stretch relative shadow-lg bg-white dark:bg-alt_dark dark:bg-opacity-40 rounded-3xl border-gray-300 dark:border-cyan-900 border-2 overflow-hidden md:w-[47%] lg:w-[40%] w-full `}
              >
                <span
                  className="absolute -top-4 py-5 font-extrabold -right-4 sm:text-6xl text-5xl bg-cool_gradient text-inherit w-36 text-start px-8 text-white dark:text-alt_dark"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                >
                  #{i + 1}
                </span>
                <span className="uppercase text-4xl font-extrabold tracking-wide relative z-10">
                  <span className="sm:text-9xl text-8xl cool-text text-main">
                    {item.title[0]}
                  </span>
                  <span>{item.title.slice(1)}</span>
                  <span className="text-8xl gradient-text">.</span>
                  <span className="absolute w-[150%] h-[2px] dark:bg-cyan-900 bg-gray-300 -left-10 bottom-0"></span>
                </span>
                <p
                  className="flex-1 sm:text-sm text-xs flex items-center uppercase opacity-100 relative z-10"
                  style={{
                    textShadow: "0 0 2px",
                  }}
                >
                  {item.content}
                </p>
                <div
                  className={`w-72 opacity-80 h-40 absolute -bottom-8 ${
                    i === 0 || i === 1 ? "-left-[10px] " : "-right-[15px]"
                  } bg-cool_gradient`}
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-full sm:flex-nowrap items-center justify-center gap-4 mt-4 mx-auto max-w-[1150px] content-center">
            <Button Icon={TbArrowBack} content="go back" href="/about" />
            <Button
              Icon={TbSquaresDiagonal}
              content="see my works"
              href="/works"
            />
          </div>
        </main>
      </Container>
    </PageTransition>
  );
}
export default INFO;
