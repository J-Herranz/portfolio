import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyLearn.css'

function SurveyLearn() {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (
    <>
      <h1>Árbol Genealógico de Felinae con Llaves</h1>

      <div className="tree">
        <ul>
          <li>
            <div className="node">Felinae</div>
            <ul>
              <li>
                <div className="node">Panthera</div>
                <ul>
                  <li><div className="node">León</div></li>
                  <li><div className="node">Tigre</div></li>
                  <li><div className="node">Leopardo</div></li>
                  <li><div className="node">Jaguar</div></li>
                </ul>
              </li>
              <li>
                <div className="node">Felis</div>
                <ul>
                  <li><div className="node">Gato doméstico</div></li>
                  <li><div className="node">Gato salvaje europeo</div></li>
                </ul>
              </li>
              <li>
                <div className="node">Acinonyx</div>
                <ul>
                  <li><div className="node">Chita</div></li>
                </ul>
              </li>
              <li>
                <div className="node">Puma</div>
                <ul>
                  <li><div className="node">Puma</div></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </>
  );
}

export { SurveyLearn }