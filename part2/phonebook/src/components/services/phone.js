import axios from "axios"

const baseUrl = "http://localhost:3001/persons"
const addPhone =  newPhone => axios.post(baseUrl, newPhone)

const deletePhone = (id) => {
    const deletePhoneUrl = baseUrl + "/" + id;
    console.log(deletePhoneUrl);
    return (
        axios.delete(deletePhoneUrl)
            .then(response => console.log(`Deleted post with id ${id}`))
            .catch(error => {
                console.error(error)
            })
    )
}
export default {addPhone , deletePhone}