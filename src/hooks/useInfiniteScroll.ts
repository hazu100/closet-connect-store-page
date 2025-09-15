import { useEffect, useRef } from "react";

export const useInfiniteScroll = ({
  callback,
  hasMore,
  isLoading,
  setLoader,
}: {
  callback: () => void;
  isLoading: boolean;
  hasMore: boolean;
  setLoader: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoader();
        setTimeout(() => callback(), 1000);
      }
    });

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [callback, isLoading, hasMore]);

  return ref;
};
