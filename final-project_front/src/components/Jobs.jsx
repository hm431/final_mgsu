import Footer from './Footer';
import Header from './Header';
import { useNavigate } from "react-router-dom";
import Main from './Main';
import PopupWithForm from './PlaceWithForm';
import ImagePopup from './ImagePopup';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Card from "./Card";
import AddPlacePopup from './AddPlacePopup';
import DeliteCardPopup from './DeliteCardPopup';


function Jobs() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, changeAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, changePlasePopupOpen] = React.useState(false);
    const [isDelitePopupOpen, changeDelitePopupOpen] = React.useState(null);
    const [selectedCard, changeSelectedCard] = React.useState(null);


    //создвние стейта currentUser
    const [currentUser, changeCurrentUser] = React.useState({});

 

 
    const navigate = useNavigate();

    function onButtonMachines() {
        navigate("/machines");
    }

    function onButtonSchedule() {
        navigate("/schedule");
    }

    function onButtonSchedule() {
        navigate("/schedule");
    }

    function onButtonEnnoblement() {
        navigate("/Ennoblement");
    }


    function onButtonWorkers() {
        navigate("/Workers");
    }

   
  




    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header nameOfHeaderLink={'Выйти'} isProfil={"true"} linkOfHeaderLink={'/login'} />

                <div class="jobs">
                    <h1 class="jobs__header"> Выберите задачу</h1>
                    <div class="jobs__list">
                        <button type="button" onClick={onButtonMachines} class="jobs__button">
                            Составление ведомости наличия и состояния машин на участок
                        </button>

                        <button type="button" onClick={onButtonSchedule} class="jobs__button">
                            Составление недельно-суточный график выполнения работ на объектах
                        </button>

                        <button type="button" onClick={onButtonEnnoblement} class="jobs__button">
                            Составление календарного плана  работ по облагораживанию на месяц
                        </button>

                        <button type="button" onClick={onButtonWorkers} class="jobs__button">
                            Составление ведомости распределения исполнителей на участки
                        </button>
                    </div>
                </div>

                <Footer/>
            </div>
        </CurrentUserContext.Provider>
    );
}


export default Jobs;