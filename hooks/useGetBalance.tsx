import { useReadContract } from "wagmi";
import abi from "../constants/abi.json";

export const useGetBalance = () => {
  const { data, isError, isLoading } = useReadContract({
    address: "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F", //contract address
    abi: abi,
    functionName: "getBalance",
  });
  const balance = data;

  return { balance, isError, isLoading };
};
