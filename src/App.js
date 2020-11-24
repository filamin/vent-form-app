import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({});

  function handleStateChange({ target: { name, value } }) {
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Отправлено в JSON \n ${JSON.stringify(state)}`);
  }

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="items-container">
          <div className="items-cols">
            <div className="item">
              <h1>Заслонка</h1>
              <div className="prop">
                <p>Управление</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlChoice1"
                      name="control"
                      value="descret"
                      required
                      onClick={handleStateChange}
                    />
                    <label htmlFor="controlChoice1">Дискретное</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlChoice2"
                      name="control"
                      value="analog"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="contactChoice2">Аналоговое</label>
                  </div>
                </div>
              </div>
              <div className="prop">
                <p>Контроль открытия</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlOpenChoice1"
                      name="controlOpen"
                      value="No"
                      required
                      onClick={handleStateChange}
                    />
                    <label htmlFor="controlChoice1">Нет</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlOpenChoice2"
                      name="controlOpen"
                      value="Yes"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="contactChoice2">Есть</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <h1>Фильтра</h1>
              <div className="prop">
                <p>Количество</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      required
                      name="filtersAmount"
                      value={state.filtersAmount}
                      id="filtersAmount"
                      type="number"
                      min="0"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="filtersAmount">шт.</label>
                  </div>
                </div>
              </div>
              <div className="prop">
                <p>Сигналы</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="signalsChoice1"
                      name="signals"
                      value="connected"
                      required
                      onClick={handleStateChange}
                    />
                    <label htmlFor="signalsChoice1">Разделены</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="signalsChoice2"
                      name="signals"
                      value="disconected"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="signalsChoice2">Объединены</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <h1>Нагреватель</h1>
              <div className="prop">
                <p>Управление</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="heaterChoice1"
                      name="heater"
                      value="watered"
                      required
                      onClick={handleStateChange}
                    />
                    <label htmlFor="heaterChoice1">Водяной</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="heaterChoice2"
                      name="heater"
                      value="electricity"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="heaterChoice2">Электрический</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <h1>Охладитель</h1>
              <div className="prop">
                <p>Тип</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="coolerChoice1"
                      name="cooler"
                      value="no"
                      required
                      onClick={handleStateChange}
                    />
                    <label htmlFor="coolerChoice1">Нет</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="coolerChoice2"
                      name="cooler"
                      value="watered"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="coolerChoice2">Водяной</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="coolerChoice3"
                      name="cooler"
                      value="freon"
                      onClick={handleStateChange}
                    />
                    <label htmlFor="coolerChoice3">Фреоновый</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-cols">
            <div className="item">
              <h1>Вентилятор</h1>
              <div className="prop">
                <p>Мощность</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      required
                      name="powerAmount"
                      value={state.powerAmount}
                      id="powerAmount"
                      type="number"
                      min="0"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="powerAmount">кВт</label>
                  </div>
                </div>
              </div>
              <div className="prop">
                <p>Управление</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlVentChoice1"
                      name="controlVent"
                      value="directStart"
                      required
                      onChange={handleStateChange}
                    />
                    <label htmlFor="controlVentChoice1">Прямой пуск</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="controlVentChoice2"
                      name="controlVent"
                      value="freqConvertor"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="controlVentChoice2">
                      Преобразователь частоты
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <h1>Общие</h1>
              <div className="prop">
                <p>Корпус</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="bodyMaterialChoice1"
                      name="bodyMaterial"
                      value="plastic"
                      required
                      onChange={handleStateChange}
                    />
                    <label htmlFor="bodyMaterialChoice1">Пластик</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="radio"
                      id="bodyMaterialChoice2"
                      name="bodyMaterial"
                      value="metal"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="bodyMaterialChoice2">Метал</label>
                  </div>
                </div>
              </div>
              <div className="prop">
                <p>Доп. опции</p>
                <div className="prop-options">
                  <div className="prop-options-row">
                    <input
                      type="checkbox"
                      id="options-fireAlarm"
                      name="fireAlarm"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="options-fireAlarm">Сигнал Пожар</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="checkbox"
                      id="options-led"
                      name="led"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="options-led">LED-индикация</label>
                  </div>
                  <div className="prop-options-row">
                    <input
                      type="checkbox"
                      id="options-dispetcher"
                      name="dispetcher"
                      onChange={handleStateChange}
                    />
                    <label htmlFor="options-dispetcher">Диспетчеризация</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default App;
