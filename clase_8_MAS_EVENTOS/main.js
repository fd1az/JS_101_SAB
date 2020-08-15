const app = document.getElementById('app');

app.innerHTML = `
    <h1> Dom events </h1>
    <button type="button" id="idbotton" class="btn" data-nombre-boton="miBoton">Click</button>
    <br>
    <button type="button" id="idbotton2" class="btn" data-nombre-boton="miBoton">Click</button>
    <!--Event propagation -->
    <div class="uno">
        <div class="dos">
            <button type="button" class="btn btn-violet tres">Click</button>
        </div>
    </div>

    <!-- Prevent Default -->
    <form >
        <label>
            Ingresar
            <input type="email" name="email">
        </label>
        <label>
            <input type="checkbox">Terminos y condiciones
        </label>
    </form>

    <!-- Event Delegation -->
    <div class="list-container">
        <button type="button" class="btn" id="addItem">Agregar</button>
        <ul id="list">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
        </ul>
    </div>
    <form name="cheto">
      <label>
        Nombre
        <input type="tex" name="fullname" />
      </label>
      <label>
        Ingresar
        <input type="email" name="emailCheto" />
      </label>
      <label>
        <input type="checkbox" name="terms" />Terminos y condiciones
      </label>
      <div class="container">
        <label>
          Azul
          <input type="radio" name="color" value="azul" checked />
        </label>
        <label>
          Verde
          <input type="radio" name="color" value="verde" />
        </label>
        <label>
          Rojo
          <input type="radio" name="color" value="rojo" />
        </label>
      </div>
      <label>
        <select name="bebidas" style="width:100px; heigth:100px">
          <option value="">seleccionar</option>
          <option value="cerveza" selected>Birra 🍺</option>
          <option value="vino">Vino 🍷</option>
          <option value="whisky">whisky 🥃 </option>
        </select>
      </label>
    </form>

`;
