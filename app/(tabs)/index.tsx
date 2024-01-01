import React from "react";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Text>Login</Text>
      </Link>
      <Link href={"/(modals)/booking"}>
        <Text>Booking</Text>
      </Link>
      <Link href={"/listing/rad"}>
        <Text>Listing</Text>
      </Link>
    </View>
  );
};

export default Page;
