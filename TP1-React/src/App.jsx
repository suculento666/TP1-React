
import Header from './components/Header'
import Form from './components/Form'
import Listado from './components/Listado'
function App() {
 return (
    <>
      <Header />
      <div className='container'>
        <div class = "row">
          <div className='one-half column'> <Form /></div>
          <div className='one-half column'> <Listado /></div>
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
