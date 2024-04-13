import { useReadContract } from "wagmi";
import abi from "../constants/abi.json";

export const useOwner = (owner: number) => {
  const { data, isError, isLoading } = useReadContract({
    address: "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F",
    abi: abi,
    functionName: `owner${owner}`,
  });
  const address = data;
  return { address, isError, isLoading };
};
