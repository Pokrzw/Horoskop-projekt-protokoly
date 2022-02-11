import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../../styles/customDivinations/divinationsMain.scss";

const EditDivinations = ({ setDivinityTextToChange, profil }) => {
  const navigate = useNavigate();

  const [dzienny, setDzienny] = useState([]);
  const [kariera, setKariera] = useState([]);
  const [zdrowie, setZdrowie] = useState([]);
  const [relacje, setRelacje] = useState([]);

  useEffect(() => {
    if (profil.znak) {
      (async () => {
        await axios
          .get(`http://localhost:5000/divinities/all/dzienny/${profil.znak}`)
          .then((data) => setDzienny(data.data.wrozba));
      })();
    }
  }, [profil]);

  useEffect(() => {
    if (profil.znak) {
      (async () => {
        await axios
          .get(`http://localhost:5000/divinities/all/kariera/${profil.znak}`)
          .then((data) => setKariera(data.data.wrozba));
      })();
    }
  }, [profil]);

  useEffect(() => {
    if (profil.znak) {
      (async () => {
        await axios
          .get(`http://localhost:5000/divinities/all/zdrowie/${profil.znak}`)
          .then((data) => setZdrowie(data.data.wrozba));
      })();
    }
  }, [profil]);

  useEffect(() => {
    if (profil.znak) {
      (async () => {
        await axios
          .get(`http://localhost:5000/divinities/all/relacje/${profil.znak}`)
          .then((data) => setRelacje(data.data.wrozba));
      })();
    }
  }, [profil]);

  return (
    <div className="EditDivinations">
      <h2>Przepowiednie dla: {profil.znak}</h2>

      <Link to="/profile/:id/edit_divinations/add_divination">
        <button>Dodaj</button>
      </Link>

      <div className="categories">
        <div className="segment dzienny">
          <h3>Dzienny:</h3>
          {dzienny.map((x) => {
            return (
              <div className="wrozba">
                <div className="element">{x.substring(0, 50)}...</div>
                <button
                  onClick={async () => {
                    axios
                      .delete(
                        `http://localhost:5000/divinities/delete/${profil.znak}/dzienny/${x}`
                      )
                      .then(() => {
                        navigate("/");
                      });
                  }}
                >
                  Usuń
                </button>
                {/* <Link to="/profile/:id/edit_divinations/add_values"> */}
                <button
                  onClick={() => {
                    setDivinityTextToChange(x);
                    navigate("/profile/:id/edit_divinations/add_values");
                  }}
                >
                  Edytuj
                </button>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
        <div className="kariera">
          <h3>Kariera</h3>
          {kariera.map((x) => {
            return (
              <div className="segment wrozba">
                <div className="element">{x.substring(0, 50)}...</div>
                <button
                  onClick={async () => {
                    axios
                      .delete(
                        `http://localhost:5000/divinities/delete/${profil.znak}/kariera/${x}`
                      )
                      .then(() => {
                        navigate("/");
                      });
                  }}
                >
                  Usuń
                </button>
                <button>Edytuj</button>
              </div>
            );
          })}
        </div>
        <div className="segment zdrowie">
          <h3>Zdrowie:</h3>
          {zdrowie.map((x) => {
            return (
              <div className="wrozba">
                <div className="element">{x.substring(0, 50)}...</div>
                <button
                  onClick={async () => {
                    axios
                      .delete(
                        `http://localhost:5000/divinities/delete/${profil.znak}/zdrowie/${x}`
                      )
                      .then(() => {
                        navigate("/");
                      });
                  }}
                >
                  Usuń
                </button>
                <button>Edytuj</button>
              </div>
            );
          })}
        </div>
        <div className="segment relacje">
          <h3>Relacje</h3>
          {relacje.map((x) => {
            return (
              <div className="wrozba">
                <div className="element">{x.substring(0, 50)}...</div>
                <button
                  onClick={async () => {
                    axios
                      .delete(
                        `http://localhost:5000/divinities/delete/${profil.znak}/relacje/${x}`
                      )
                      .then(() => {
                        navigate("/");
                      });
                  }}
                >
                  Usuń
                </button>
                <button>Edytuj</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditDivinations;
