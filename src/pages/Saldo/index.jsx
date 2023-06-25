import React from "react";
import {
  Center,
  Column,
  Divider,
  FlatList,
  Heading,
  Text,
  VStack,
} from "native-base";

const data = [
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: 100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: 100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
];

export default function Saldo() {
  const saldo = "100";

  return (
    <Center flex={"1"} flexDirection={"column"} backgroundColor={'#F2F2F2'} > 
      <Divider />
      <Heading>Seu saldo</Heading>
      <Center w={"80%"} borderWidth={1} borderRadius={4} borderColor={"black"}>
        <Text>R${saldo}</Text>
      </Center>
      <Divider />

      <Text my={4}>Seu Extrato</Text>

      <FlatList
        w={"90%"}
        data={data}
        ItemSeparatorComponent={() => {
          return <Divider my={1} />;
        }}
        renderItem={({ item }) => {
          return (
            <Column flex={"1"}>
              <Text>{item.date}</Text>

              <Center
                flex={"1"}
                borderWidth={1}
                borderRadius={4}
                borderColor={"black"}
              >
                {item.amount < 0 ? (
                  <Text color={"red.400"}>-R${item.amount * -1}</Text>
                ) : (
                  <Text color={"green.400"}>R${item.amount}</Text>
                )}
              </Center>
            </Column>
          );
        }}
      />
    </Center>
  );
}
