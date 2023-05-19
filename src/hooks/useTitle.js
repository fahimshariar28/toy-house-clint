import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Toy House`;
  }, [title]);
};
export default useTitle;
