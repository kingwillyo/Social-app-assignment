import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href={"/(Auth)/AddPhoto"}/>
  )
}

export default index