import BoxReveal from "./Boxreveal";

export default function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
        Taste of Home<span className="text-[#f73b3b]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        "Bringing comfort to every meal."{" "}
          <span className="text-[#f73b3b]">Excellence Test</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; For every first order 20% Off{" "}
            <span className="font-semibold text-[#f73b3b]"> Order</span>,{" "}
            <span className="font-semibold text-[#f73b3b]"> Growcery</span>,{" "}
            <span className="font-semibold text-[#f73b3b]"> Angry Birds</span>,{" "}
            and{" "}
            <span className="font-semibold text-[#f73b3b]"> Chef</span>
            . <br />
            -&gt; 100% Organic home made food. <br />
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor="#5046e6" duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
  );
}