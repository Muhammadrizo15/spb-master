import React from 'react';
import Header from "./Header";
import './scss/swiper.css'
import Footer from './Footer'
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import PickLog from "./Registration/pick-log";
import Register from "./Registration/register";
import RegisterMaster from "./Registration/register-master";
import MoreInfo from "./Registration/moreinfo"
import Remont from "./remont";
import Detail from "./detail";
import ChoiceOfReplenishmentMethod from "./ChoiceOfReplenishmentMethod/ChoiceOfReplenishmentMethod";
import Chat from "./Chat/Kirill";
import Applications from "./Applications/applications";

// Order imports
import MyOrders from "./Orders/Myorders";
import AllOrders from "./Orders/Allorders";


// Full chat

import FChatKirill from './full-chat/Kirill'
import FChatSupport from './full-chat/Support'
import FChatFrame from './full-chat/frameMessages'


import Refill from "./ChoiceOfReplenishmentMethod/refill";
import Pay from "./ChoiceOfReplenishmentMethod/pay";


import OrderV from './addedorders/AddedOrders'
import OrderVAcrchives from './addedorders/ArchiveOfOrders'

// History imports **

import History from "./History/history-all";
import HistoryReplenishment from "./History/history-replishment";
import HistoryFindings from "./History/history-findings";
import Historypayments from "./History/history-payments";

// history imports end

import SettingsAll from "./Settings/Settings-all";
import Profile from "./Settings/Profile";
import Contacts from "./Settings/Contacts";
import Services from "./Settings/services";
import Finance from "./Settings/Finance";
import Order from "./Home/Order";
import Price from './Settings/Price'

// after login
import ProfileFH from './full-height/ProfileFH'
import WalletFH from './full-height/WalletFH'
import FinanceFH from './full-height/FinanceFH'
import RefillFH from './full-height/refillFh'
import PayFH from './full-height/payfh'

// after login end

import Allapplications from './Applications/Allapplications'
import MapMaster from './Pick-master/masters'
import Performed from './Applications/performed'
import Canceled from './Applications/canceled'
import FrameMessage from './Chat/frameMessages'
import Fullgo from "./fullgo";
import ProfileNumber from "./Chat/profileNumber";
import OfferAService from "./Orders/OfferAService";
import Address from "./Settings/Address";
import UserF from "./Chat/Support";
import AddDevices from "./addDevices/AddDevices";
import ReviewMaster from "./Chat/ReviewMaster";
import Rating from "./addDevices/rating";
import PickMaster from "./Pick-master/Pick-master";
import FrameMaster from "./Pick-master/frame-masters";
import ReviewsMaster from "./Pick-master/Reviews-master";
import AddedDevices from './addDevices/AddedDevices'
import TitleService from "./addDevices/TitleService";
import Login from "./Registration/Login";
import Archive from "./addDevices/Archive";
import Mysuggest from "./mysuggest";
import Map1 from './yandexMap/map';

function App() {
    let location = useLocation()

    setTimeout(() => {
        if (location.pathname == '/detail') {
            let hg = document.querySelector('.hhun')
            hg?.classList.add('nhh')
        } else if (location.pathname == '/master-map') {
            let hg = document.querySelector('.hhun')
            hg?.classList.add('nhh')
        } else if (location.pathname == '/detail/true') {
            let hg = document.querySelector('.hhun')
            hg?.classList.add('nhh')
        }
    }, 1000);



    


    return (
        <div className='hhun'>
            <Header />
            <main>
                <Routes>
                    <Route>

                        {/*Registrations*/}

                        <Route path={"/pick-login"} element={<PickLog />} />
                        <Route path={"/register"} element={<Register />} />
                        <Route path={"/register-master"} element={< RegisterMaster />} />
                        <Route path={"/more-info"} element={<MoreInfo />} />
                        <Route path={"/login"} element={<Login />} />


                        {/*--Registrations--*/}


                        {/* Applications */}
                        <Route path={"/applications/my"} element={<Applications />} />
                        <Route path={"/applications/performed"} element={<Performed />} />
                        <Route path={"/applications/canceled"} element={<Canceled />} />
                        <Route path={"/applications/all"} element={<Allapplications />} />




                        <Route path={"/remont"} element={<Remont />} />
                        <Route path={"/detail"} element={<Detail />} />
                        <Route path={"/detail/:boolen"} element={<Detail />} />
                        
                        <Route path={"/replenishment"} element={<ChoiceOfReplenishmentMethod />} />

                        {/* Orders */}
                        <Route path={"/orders/my"} element={<MyOrders />} />
                        <Route path={"/orders/all"} element={<AllOrders />} />

                        {/* Orders end */}

                        {/* ---CHAT--- */}


                        {/*Kirill*/}
                        <Route path={"/chat/16854163"} element={<Chat />} />


                        {/*TEX Support*/}
                        <Route path={"/chat/168789461"} element={<UserF />} />

                        {/* User Review */}

                        <Route path={"/review"} element={<ReviewMaster />} />
                        <Route path={"/rating"} element={<Rating />} />
                        <Route path={"/chat/frame-message"} element={<FrameMessage />} />


                        {/* ---CHAT END--- */}


                        {/* Full chat */}

                        {/*Kirill*/}
                        <Route path={"/fchat/16854163"} element={<FChatKirill />} />


                        {/*TEX Support*/}
                        <Route path={"/fchat/168789461"} element={<FChatSupport />} />

                        <Route path={"/fchat/frame-message"} element={<FChatFrame />} />


                        {/* Full chat end */}



                        <Route path={"/refill"} element={<Refill />} />
                        <Route path={"/pay"} element={<Pay />} />


                        {/* History */}
                        <Route path={"/history/all"} element={<History />} />
                        <Route path={"/history/replenishment"} element={<HistoryReplenishment />} />
                        <Route path={"/history/findings"} element={<HistoryFindings />} />
                        <Route path={"/history/payments"} element={<Historypayments />} />



                        <Route path={"/settings"} element={<SettingsAll />} />
                        <Route path={"/profile"} element={<Profile />} />
                        <Route path={"/service"} element={<Services />} />
                        <Route path={"/finance"} element={<Finance />} />
                        <Route path={"/address"} element={<Address />} />
                        <Route path={"/contacts"} element={<Contacts />} />
                        <Route path={"/price"} element={<Price />} />
                        <Route path={"/image"} element={<Fullgo />} />
                        <Route path={"profile-number"} element={<ProfileNumber />} />
                        <Route path={"offer-service"} element={<OfferAService />} />

                        {/* Added divices */}
                        <Route path={"/add-device"} element={<AddDevices />} />
                        <Route path={"/added-device"} element={<AddedDevices />} />
                        <Route path={"/title-service"} element={<TitleService />} />
                        <Route path={"/added-device-archive"} element={<Archive />} />

                        {/* Added divices */}
                        <Route path={"/add-device"} element={<AddDevices />} />
                        <Route path={"/added-device"} element={<AddedDevices />} />
                        <Route path={"/title-service"} element={<TitleService />} />
                        <Route path={"/added-device-archive"} element={<Archive />} />



                        {/* Added orders */}
                        <Route path={"/order/actual"} element={<OrderV />} />
                        <Route path={"/order/archive"} element={<OrderVAcrchives />} />


                        {/* Added orders end */}




                        {/*Pick master*/}
                        <Route path={"/pick-master/14325664"} element={<PickMaster />} />
                        <Route path={"/reviews-master"} element={<ReviewsMaster />} />
                        <Route path={"/mysuggest"} element={<Mysuggest />} />
                        <Route path={"/map"} element={<Map1 />} />

                        <Route path={"/master-map"} element={<MapMaster />} />
                        <Route path={"/frame-master"} element={<FrameMaster />} />


                        {/* Full page */}


                        <Route path={'/login/profile'} element={<ProfileFH />} />
                        <Route path={'/login/wallet'} element={<WalletFH />} />
                        <Route path={'/login/finance'} element={<FinanceFH />} />
                        <Route path={'/login/refill'} element={<RefillFH />} />
                        <Route path={'/login/pay'} element={<PayFH />} />



                        <Route path={"/"} element={<Home />} />
                    </Route>
                </Routes>
            </main>
            {location.pathname.includes('/chat/') ? null : <Footer />}
        </div>
    );
}

export default App;
