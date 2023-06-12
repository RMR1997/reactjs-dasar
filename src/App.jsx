import ComponentProps from "./belajar/componentProps"
import ComponentProps2 from "./belajar/componentProps2"

function App() {

  return (
    // simbol fragment <> </>, fragment sebagai parent dari suatu komponen
      <>
      <div className="flex flex-col justify-center items-center min-h-screen">

      <ComponentProps/>
      <ComponentProps2 textColor="text-red-500" text="NAMA SAYA MAMANG GAROX"/>
      <ComponentProps2 textColor="text-blue-500" text="NAMA SAYA MAMANG GARIX"/>

      </div>
    
    </>
  )
}

export default App
