import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

export function useSectionInVeiw(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setactiveSection, LastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - LastClick > 1000) {
      setactiveSection(sectionName);
    }
    console.log(inView);
  }, [inView, setactiveSection, LastClick]);

  return { ref };
}
