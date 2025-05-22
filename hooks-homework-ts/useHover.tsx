import { useEffect, useRef, useState } from "react";

export default function useHover<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleEnter() {
      setIsHovered(true);
    }

    function handleLeave() {
      setIsHovered(false);
    }

    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return [ref, isHovered] as const;
}

