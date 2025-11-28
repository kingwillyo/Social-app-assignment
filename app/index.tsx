import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href={"/(Auth)/Phone"}/>
  )
}

export default index