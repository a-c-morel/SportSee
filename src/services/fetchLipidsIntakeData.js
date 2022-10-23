let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

/**
 * 
 * @param {string} id - User's id
 * @returns a string which is the amount of lipids of the user
 */
export default async function fetchLipidsIntakeData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral
            .filter(userGeneral => parseFloat(id) === userGeneral.userId)
            .map(userGeneral => userGeneral.keyData)
        const lipidsData = data[0].lipidCount.toString()
        return lipidsData
      } catch (error) {
          console.log("error", error)
      }
    } else if (mode === "prod") {
      try {
        const response = await fetch(urlProd+id) // ⬅ endPoint with the id
        const json = await response.json()
        const data = json.data.keyData
        const lipidsData = data.lipidCount.toString()
        return lipidsData
      } catch (error) {
          console.log("error", error)
      }
    }
  }