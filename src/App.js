import { LoginForm } from "./components/LoginForm";
// import { ControlledInput } from "./components/ControlledInput";
export const App =()=> {
  return<>
   <LoginForm onSubmit={values=>console.log(values)}/>
   {/* <ControlledInput/> */}

  </>
}