
const texto = `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.`
;

export default function Home() {
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: 0, padding: 0, boxSizing: "border-box" , padding: '50px 100px', color: 'white'}}>
      <h1 className="text-4xl font-bold">
        APP WEB HOSTEADA EN LA NUBE
        <br/>
        <br/>
        
      </h1>
      <br/>

      <h3>
        Abel Pintor Garcia
      </h3>
      <p className="mt-4 text-lg">Ejemplo de despligue frontend en el servicio EC2
        <br />
        <strong>

          {
            (()=>{
              let finalText = '';
              for (let i = 0; i < 100; i++) {
                finalText+= texto;
              }
              return finalText;
            })()
          }
        </strong>
      </p>
    </main>
  );
}
