import { useEffect } from "react";
import Clipboard from "clipboard";

const useClipboard = querySelector => {
  useEffect(() => {
    const clipboard = new Clipboard(querySelector);
    return () => {
      clipboard.destroy();
    };
  }, []);
};

export default useClipboard;
