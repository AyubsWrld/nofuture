import React, { useEffect, useRef } from "react";

const marqueeItems = [
  { type: "text", content: "NoFuture" },
  { type: "icon", content: "../../public/vector-746.svg" },
  { type: "text", content: "NoFuture" },
  { type: "icon", content: "../../public/vector-746.svg" },
  { type: "text", content: "NoFuture" },
];

export const Banner = (): JSX.Element => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const translateRef = useRef(0);
  const singleWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const burstRef = useRef(0);
  const lastScrollTRef = useRef(0);
  const baseSpeed = 48;
  const burstMultiplier = 3.5;
  const maxBurst = 800;
  const burstDecayRate = 6;
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const measure = () => {
    const inner = innerRef.current;
    if (!inner) return;
    const single = inner.querySelector(".marquee-single") as HTMLElement | null;
    if (!single) return;
    singleWidthRef.current = Math.ceil(single.getBoundingClientRect().width) || 0;
    if (singleWidthRef.current > 0) {
      inner.style.minWidth = `${singleWidthRef.current * 2}px`;
    }
  };

  useEffect(() => {
    const tryMeasure = () => {
      measure();
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measure).catch(() => measure());
      }
    };
    tryMeasure();
    const onResize = () => {
      setTimeout(measure, 30);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY || 0;
    let lastT = performance.now();
    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY || 0;
      const dt = Math.max(1, now - lastT);
      const dy = y - lastY;
      const instVel = Math.abs(dy) / (dt / 1000);
      const newBurst = Math.min(maxBurst, instVel * burstMultiplier);
      burstRef.current = Math.max(burstRef.current, newBurst);
      lastScrollTRef.current = now;
      lastY = y;
      lastT = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let last = performance.now();
    const step = (now: number) => {
      const dtMs = Math.min(64, now - last);
      last = now;
      const dts = dtMs / 1000;
      if (burstRef.current > 0) {
        burstRef.current *= Math.exp(-burstDecayRate * dts);
        if (burstRef.current < 0.5) burstRef.current = 0;
      }
      const speed = baseSpeed + burstRef.current;
      translateRef.current -= speed * dts;
      const singleW = singleWidthRef.current || 0;
      if (singleW > 0) {
        if (translateRef.current <= -singleW) {
          const extra = Math.floor(Math.abs(translateRef.current) / singleW) * singleW;
          translateRef.current += extra;
        } else if (translateRef.current > 0) {
          const reduce = Math.floor(Math.abs(translateRef.current) / singleW + 1) * singleW;
          translateRef.current -= reduce;
        }
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${translateRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const t = setTimeout(measure, 60);
    return () => clearTimeout(t);
  }, []);

  const SingleBlock = () => (
    <div className="marquee-single inline-flex items-center gap-[65px] box-border pr-[65px]">
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === "text" ? (
            <div className="flex items-center justify-center [font-family:'Inter_Tight',Helvetica] font-semibold text-white text-[120px] text-center tracking-[0] leading-[180px] whitespace-nowrap flex-shrink-0">
              {item.content}
            </div>
          ) : (
            <img className="w-[107.04px] h-[107px] object-contain flex-shrink-0" alt="Star icon" src={item.content} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="relative w-full h-80 rounded-[32px] overflow-hidden [background:url(../section-four.png)_50%_50%_/_cover,linear-gradient(180deg,rgba(12,12,12,1)_0%,rgba(20,20,20,1)_100%)]" aria-label="Rotating marquee content">
      <div ref={viewportRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap w-full overflow-hidden" style={{ willChange: "transform" }}>
        <div ref={innerRef} className="flex items-center" style={{ transform: "translate3d(0px,0,0)", transition: "transform 0s linear", willChange: "transform" }}>
          <SingleBlock />
          <SingleBlock />
        </div>
      </div>
    </section>
  );
};
