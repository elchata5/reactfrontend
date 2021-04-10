import API from "../ConfigUrl";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "wouter";
import loginContext from "../Context/loginContext";

export default function NewPersona(prop) {
  const [, setLocation] = useLocation();
  const [direccion, setDireccion] = useState("");
  const [numero, setNumero] = useState();
  const [depto, setDepto] = useState("");
  const [piso, setPiso] = useState(0);
  const [personas, setPersonas] = useState([]);
  const [auxEditar, setAuxEditar] = useState(null);
  const [idPropietario, setIdPropietario] = useState(null);
  const { idInmu } = prop.params;
  const { userLogin } = useContext(loginContext);

  useEffect(() => {
    if (!Boolean(userLogin)) {
      setLocation("/login");
    }
    API.get(`personas/${userLogin.id}`).then((res) => {
      setPersonas(res.data);
    });
    if (Number(idInmu) !== 0) {
      API.get("inmueble/" + idInmu)
        .then((res) => {
          if (Number(res.status) === 200) {
            setDireccion(res.data.direccion);
            setNumero(res.data.num);
            setDepto(res.data.depto);
            setPiso(res.data.piso);
            setIdPropietario(res.data.propietario.id);
            setAuxEditar(res.data);
          }
        })
        .catch((error) => {
          setLocation("/");
        });
    }
  }, [idInmu, setLocation, userLogin]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var aux;
    if (auxEditar) {
      aux = {
        inmobiliaria: {
          id: userLogin.id,
        },
        direccion: direccion,
        num: numero,
        piso: piso,
        depto: depto,
        id: auxEditar.id,
        propietario: {
          id: idPropietario,
        },
      };
    } else {
      aux = {
        inmobiliaria: {
          id: userLogin.id,
        },
        direccion: direccion,
        num: numero,
        piso: piso,
        depto: depto,
        propietario: {
          id: idPropietario,
        },
      };
    }
    console.log(aux);
    API.post("inmueble/save", aux)
      .then((res) => {
        alert("Inmueble creado con exito");
      })
      .catch((e) => {
        alert(e);
      });
    setLocation("/inmuebles");
  };

  return (
    <div className="card card-info">
      <div className="card-header">
        <h3 className="card-title">
          {Number(idInmu) === 0 ? "Nuevo Inmueble" : "Editar Inmueble"}
        </h3>
      </div>
      {/* /.card-header */}
      {/* form start */}
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Direccion </label>
            <input
              type="text"
              name="direccion"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Ingresa Direccion"
            />
          </div>
          <div class="row">
                  <div class="col-3">
                  <label htmlFor="exampleInputEmail1">Num: </label>
                    <input
                        type="number"
                        name="numero"
                        className="form-control"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="Numero"
                    />
                  </div>
                  <div class="col-3">
                  <label htmlFor="exampleInputEmail1">Piso: </label>

                    <input
                        type="number"
                        name="piso"
                        className="form-control"
                        value={piso}
                        onChange={(e) => setPiso(e.target.value)}
                        placeholder="piso"
                    />
                  </div>
                  <div class="col-3">
                  <label htmlFor="exampleInputEmail1">Depto: </label>
                  <input
                    type="text"
                    name="depto"
                    className="form-control"
                    value={depto}
                    onChange={(e) => setDepto(e.target.value)}
                    placeholder="Depto"
                    />
                  </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Propietario: </label>
                <select className="custom-select rounded-0" onChange={(e) => setIdPropietario(e.target.value)} value={idPropietario} >
                    {personas.map((person)=>    
                        <option value={person.id}>{person.nombre} {person.apellido}</option>
                    )}
                </select>
            </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button type="submit" className="btn btn-primary btn-block">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
