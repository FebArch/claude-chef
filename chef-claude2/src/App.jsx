import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

import Header from './components/Header'
import IngredientForm from './components/IngredientForm'

export default function App(){
  return (
    <div className="container-fluid p-0">
      <Header />
      <IngredientForm />

    </div>
  )
}