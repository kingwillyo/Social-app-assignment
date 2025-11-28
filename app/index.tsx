import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href={"/(Auth)/Verification"}/>
  )
}

export default index