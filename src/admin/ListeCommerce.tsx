import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';



function ListeCommerce() {
    return (
        <main id="ListeCommerce"> 
        <NavAdmin/>
        <main>

     
        <div className="table-responsive">          
            <table className="table">
              <tbody>
                <tr>
                    <th>Id </th>
                    <th>Nom </th>
                    <th> Adresse </th>
                    <th> Code Postal </th>
                    <th> Ville </th>
                    <th> Url</th>
                    <th>Image</th>
                    <th>Decriptif</th>
                    <th>Nom code promo</th>
                    <th>Type code</th>
                </tr>
                <tr>
                    <td>id</td>
                  <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                </tr>
                <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
              </tbody>
            </table>
            </div>

     
            <div>
            <button type="button" className="btn btn-outline-primary">Ajouter un commerce</button>
            <button type="button" className="btn btn-outline-primary">Modifier un commerce</button>
            <button type="button" className="btn btn-outline-primary">Supprimer un commerce</button>
            </div>
        </main>
        </main>
    )
}
export default ListeCommerce;