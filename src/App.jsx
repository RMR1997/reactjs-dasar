import ComponentProps from "./belajar/componentProps"
import ComponentProps2 from "./belajar/componentProps2"
import Login from "./components/organism/Login"
import Register from "./components/organism/Register"
import AuthLayout from "./components/template/AuthLayout"


function App() {

  return (
    // simbol fragment <> </>, fragment sebagai parent dari suatu komponen
      <>
      <div className="flex gap-x-36 justify-center items-center min-h-screen">


      {/* <ComponentProps/>
      <ComponentProps2 textColor="text-red-500" text="NAMA SAYA MAMANG GAROX"/>
      <ComponentProps2 textColor="text-blue-500" text="NAMA SAYA MAMANG GARIX"/> */}
      <AuthLayout title="Login" desc="silahkan masuk">
        <Login></Login>
      </AuthLayout>

      <AuthLayout title="Register" desc="Register">
        <Register></Register>
      </AuthLayout>
      </div>
    
    </>
  )
}

export default App
