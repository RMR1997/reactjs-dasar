

//nested component 

// pake function biasa
function Button() {
    return <button className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white" > Button </button>
}

// pake cara anon function 
const Button2 = () => {
    return <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white" > Button </button>
}

//pake cara props
/*props = argumen/parameter yang bisa dikirim me komponen lainnya
fungsinya agar kita bisa mengkostumisasi/mengubah komponen2 yang kita buat*/
const Button3 = (props) => {
    // dibawah ini cara kasih nilai default kedalam props kalo tidak diisi
    const { tulisan = "..."} = props;
    //dibawah ini cara menggunakan props
        return <button className={`h-10 px-6 font-semibold rounded-md ${props.warna} text-white`} >{tulisan}</button>
}

//pake children
const Button4 = (props) => {
    const { color = "bg-black", children} = props;
        return <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white`} >{children}</button>
}

const ComponentProps = () => {
    // const {textColor, text} = props
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl font-bold text-center">Mamang Garox</h1>
        
      </div>

      <div className="flex justify-center items-center gap-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" > Button </button>
        <button className="h-10 px-6 font-semibold rounded-md bg-gray-500 text-white" > Button 2 </button>
        <Button/>
        <Button2/>
        {/* cara memanggil props yang dikirim dari komponen */}
        <Button3 warna="bg-pink-500" tulisan="Tombol"></Button3>
        <Button3 warna="bg-yellow-500"></Button3>
        <Button4>Logout <span>lah</span></Button4>
      </div>
    </>
  )
}

export default ComponentProps


