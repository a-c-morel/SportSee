import apple from "../assets/apple.png"

/**
 * Render a div with an icon and the number of carbohydrates of the user with the word "carbohydrates" translated in french, for example "150g Glucides"
 * @param {string} amountOfCarbs - Amount of carbohydrates of the user
 * @returns {React.ReactElement}
 */
export default function CarbIntake({amountOfCarbs}) {
    return (
        <div className="intake-element">
            <div className="intake-img-carb__background intake-img__background">
                <img src={apple} alt="" className="intake-img-carb"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{amountOfCarbs}g</p>
                <h3 className="intake-text__type">Glucides</h3>
            </div>
        </div>
    )
}