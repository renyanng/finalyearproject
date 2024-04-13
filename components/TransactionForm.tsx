import { HStack, Input, Button } from "@chakra-ui/react";
import React from "react";
// import { useInitiateTransaction } from "../hooks";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import abi from "../constants/abi.json";
import { ethers } from "ethers";

export const TransactionForm = () => {
  const [address, setaddress] = useState<string>("");
  const [amount, setamount] = useState<string>("");
  const { writeContract } = useWriteContract();

  return (
    <HStack p={5}>
      <Input
        placeholder="0xfhd...1d2d"
        w={"70%"}
        onChange={(e) => setaddress(e.target.value)}
      />
      <Input
        placeholder="Amount in ETH (0.1)"
        w={"30%"}
        onChange={(e) => setamount(e.target.value)}
      />
      <Button
        w="auto"
        onClick={() =>
          writeContract({
            address: "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F",
            abi: abi,
            functionName: "initiateTransaction",
            args: [address, ethers.parseEther(amount || "0.015")],
          })
        }
      >
        Add Transaction
      </Button>
    </HStack>
  );
};
