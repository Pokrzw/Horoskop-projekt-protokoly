import '../../styles/mainPage/divination.scss'

const Divination = () => {
    return ( 
        <div className="Divination">
            <div className="symbol">
                <img src="https://image.flaticon.com/icons/png/512/47/47038.png" alt="Panna" />
            </div>
            <div className="divinationText">
                <p>Znak Dnia</p>
                <p className="sign">Panna</p>
                <p className="text">
                Przed Tobą mnóstwo papierkowej roboty, za którą niestety nie za bardzo się trzęsiesz. Tyle dobrego, że spotkasz na swej drodze pewną życzliwą osobę, która pomoże Ci się uporać z natłokiem spraw. A we dwoje nie jest jedynie szybciej, ale i milej. 
                </p>
            </div>
        </div>
     );
}
 
export default Divination;