import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href={"/(Auth)/Welcome"}/>
  )
}

export default index