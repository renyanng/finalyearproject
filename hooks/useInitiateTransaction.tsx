// import utils from "ethers";
// import { useWriteContract, useSimulateContract } from "wagmi";
// import abi from "../constants/abi.json";

// interface Props {
//   address: string;
//   amount: string;
// }
// export const useInitiateTransaction = ({ address, amount }: Props) => {
//   const result = useSimulateContract({
//     address: "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F",
//     abi: abi,
//     functionName: "initiateTransaction",
//     args: [address, utils.parseEther(amount || "0.015")],
//   });
//   const { writeContract } = useWriteContract({result});
//   return { result };
// };
