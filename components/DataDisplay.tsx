import { Center, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useGetBalance, useOwner, useTransactions } from "../hooks";
import { ethers } from "ethers";

export const DataDisplay = () => {
  const ownerOne = useOwner(1);
  const ownerTwo = useOwner(2);
  const balance = useGetBalance();
  const transactions = useTransactions();

  return (
    <>
      <br />
      <br />
      <Center>
        <Heading as={"h1"} size="xl">
          BlockSafe Wallet
        </Heading>
      </Center>
      <br />
      <br />
      <SimpleGrid columns={2} spacing={10} p="5">
        <Stack>
          <Heading as="h2" size={"lg"}>
            Owner Details
          </Heading>
          <br />
          {!ownerOne.isError && !ownerOne.isLoading && (
            <>
              <Text fontWeight={600}>Owner One:</Text>
              <Text color={"gray.400"}>{ownerOne.address as any}</Text>
            </>
          )}
          {!ownerTwo.isError && !ownerTwo.isLoading && (
            <>
              <Text fontWeight={600}>Owner Two: </Text>
              <Text color={"gray.400"}>{ownerTwo.address as any}</Text>
            </>
          )}
        </Stack>
        <Stack>
          <Heading as="h2" size={"lg"}>
            Account
          </Heading>
          <br />
          {!balance.isError && !balance.isLoading && (
            <Text>
              Total Balance {ethers.formatEther(balance.balance as any)} ETH
            </Text>
          )}
          {!transactions.isError && !transactions.isLoading && (
            <Text>Transactions: {transactions.transactions.length}</Text>
          )}
        </Stack>
      </SimpleGrid>
    </>
  );
};
