import {
  Center,
  Heading,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
} from "@chakra-ui/react";
import { useOwner, useTransactions } from "../hooks";
import { ethers } from "ethers";
import React from "react";
import { TransactionForm } from "./";
import { useWriteContract, useAccount } from "wagmi";
import abi from "../constants/abi.json";
import { useState } from "react";

export const DataTransactions = () => {
  const transactions = useTransactions();
  const { address } = useAccount();
  const ownerOne = useOwner(1);
  const ownerTwo = useOwner(2);
  const isOwnerOne = address === ownerOne?.address;
  const isOwnerTwo = address === ownerTwo?.address;

  console.log(transactions.transactions);

  const { writeContract } = useWriteContract();

  return (
    <>
      <Center p={5}>
        <Heading as="h2" size={"lg"}>
          Transactions 💸
        </Heading>
      </Center>
      <TransactionForm />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Built for FYP</TableCaption>
          <Thead>
            <Tr>
              <Th>Address To</Th>
              <Th>Amount</Th>
              <Th>Signer Owner One</Th>
              <Th>Signer Owner Two</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.transactions &&
              transactions.transactions.map((tx: any, index) => (
                <Tr key={index}>
                  <Td>{tx.to}</Td>
                  <Td>{ethers.formatEther(tx.amount)} ETH</Td>
                  <Td>
                    {tx.signedByOwnerOne === false ? (
                      <Button
                        onClick={() =>
                          writeContract({
                            address:
                              "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F",
                            abi: abi,
                            functionName: "approveTransaction",
                            args: [index],
                          })
                        }
                        variant={"ghost"}
                        colorScheme={"red"}
                        disabled={!isOwnerOne}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Badge colorScheme={"green"}>Approve</Badge>
                    )}
                  </Td>
                  <Td>
                    {tx.signedByOwnerTwo === false ? (
                      <Button
                        onClick={() =>
                          writeContract({
                            address:
                              "0xcD6bf5C094Cde47057e04BA0dA0BBF20f60e062F",
                            abi: abi,
                            functionName: "approveTransaction",
                            args: [index],
                          })
                        }
                        variant={"ghost"}
                        colorScheme={"red"}
                        disabled={!isOwnerTwo}
                      >
                        Pending
                      </Button>
                    ) : (
                      <Badge colorScheme={"green"}>Approve</Badge>
                    )}
                  </Td>
                  <Td>
                    {tx.success ? (
                      <Badge colorScheme={"green"}>Success</Badge>
                    ) : (
                      <Badge colorScheme={"yellow"}>Programmed</Badge>
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <br />
        </Table>
      </TableContainer>
    </>
  );
};
